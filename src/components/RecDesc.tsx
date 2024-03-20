import { Box, List, ListItem, ListItemText, Typography } from '@mui/material';

export default function RecDesc() {
  return (
    <Box
      id="modal-modal-description"
      sx={{ mt: 2, overflow: 'auto', height: '95%' }}
    >
      <Typography mb={1}>
        We keep a record of each user's likes and dislikes (let's base this on
        review rating — maybe 4 or 5 is "like", everything else is "dislike").
        These are two sets that exist for every user. We're going to use
        something called the Jaccard Coefficient to calculate how similar two
        such sets are. For example, two duplicate sets will be completely
        similar (coeff of 1) while two sets with nothing in common will have a
        coeff of 0 (no similarity or overlap between the sets).
      </Typography>{' '}
      <Typography mb={1}>J(A, B) = |A ∩ B| / |A ∪ B| </Typography>
      <Typography>
        Rough flow for giving users recommendations:
        {/* numbered list */}
        <List>
          <ListItem>
            <ListItemText primary="1. Find user's current likes and dislikes." />
          </ListItem>
          <ListItem>
            <ListItemText primary="2. Get all users who have interacted with those items (both liked and unliked)." />
          </ListItem>
          <ListItem>
            <ListItemText primary="3. For each of those users, calculate their similarity to our current user using the Jaccard Coefficient. (modified, on a -1 to +1 scale)" />
          </ListItem>
          <ListItem>
            <ListItemText primary="4. Get a set of items the current user has not yet liked/disliked." />
          </ListItem>
          <ListItem>
            <ListItemText primary="5. For each of those items, calculate the probability that it should be recommended to the current user." />
          </ListItem>
          <ListItem>
            <ListItemText primary="6. How do we do this: Result = Numerator / Denominator" />
          </ListItem>
          <ListItem>
            <ListItemText primary="7. Get other users who liked or disliked that item." />
          </ListItem>
          <ListItem>
            <ListItemText primary="8. Numerator is the sum of the similarity indices of all these users who liked it - sum of indices of users who disliked it." />
          </ListItem>
          <ListItem>
            <ListItemText primary="9. Denominator is simply the total number of users of liked or disliked the item." />
          </ListItem>
          <ListItem>
            <ListItemText primary="10. Now we can rank the items based on this calculated probability, and give X number of recommendations." />
          </ListItem>
        </List>
      </Typography>
    </Box>
  );
}
