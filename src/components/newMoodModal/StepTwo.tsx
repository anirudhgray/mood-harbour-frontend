import { Box, Chip, TextField } from '@mui/material';
import { useState, useEffect } from 'react';
import axios from '../../axios';

export default function StepTwo({
  selectedAttributes,
  setSelectedAttributes,
}: {
  selectedAttributes: string[];
  setSelectedAttributes: (attributes: string[]) => void;
}) {
  const [attributes, setAttributes] = useState<string[]>([]);
  const [newAttribute, setNewAttribute] = useState('');

  useEffect(() => {
    axios
      .get('/mood/attribute/get', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
      .then((response) => {
        setAttributes(
          response.data.slice(0, 4).map((attribute: { Name: string }) => {
            return (
              attribute.Name.charAt(0).toUpperCase() + attribute.Name.slice(1)
            );
          })
        );
      })
      .catch((error) => {
        console.error('Error fetching attributes', error);
      });
  }, []);

  const handleDelete = (attributeToDelete: string) => {
    setSelectedAttributes(
      selectedAttributes.filter((attribute) => attribute !== attributeToDelete)
    );
  };

  const handleAdd = () => {
    if (!newAttribute) return;
    setSelectedAttributes([...selectedAttributes, newAttribute]);
    setAttributes([...attributes, newAttribute]);
    setNewAttribute('');
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
      }}
    >
      {attributes.map((attribute) => (
        <Chip
          key={attribute}
          label={attribute}
          clickable
          color={selectedAttributes.includes(attribute) ? 'primary' : 'default'}
          onClick={() => {
            if (selectedAttributes.includes(attribute)) {
              handleDelete(attribute);
            } else {
              setSelectedAttributes([...selectedAttributes, attribute]);
            }
          }}
        />
      ))}
      <TextField
        value={newAttribute}
        onChange={(event) => setNewAttribute(event.target.value)}
        onBlur={handleAdd}
        label="Add attribute"
        InputProps={{ sx: { borderRadius: 10 } }}
      />
    </Box>
  );
}
