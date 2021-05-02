import React from 'react';
import { Flex, Box, IconButton } from 'theme-ui';

export default function List({ items = [], parentStyle, childStyle,icon }) {
  return (
    <Box
      as="ul"
      sx={{
        listStyleType: 'none',
        margin: 0,
        padding: 0,
        ...parentStyle,
      }}
    >
      {items.map(({ icon, text}, i) => (
        <Flex
          as="li"
          sx={{ ...childStyle }}
          key={i}
        >
          <IconButton sx={styles.listIcon} aria-label="list icon">
            {icon}
          </IconButton>
          {text}
        </Flex>
      ))}     
    </Box>
  );
}
const styles = {
  listIcon: {
    width: [22, '35px'],
    marginRight:'5px',
    height: 'auto',
    color: 'black',
    padding: 0,
    fontSize: [2, 5],
    marginLeft: '-1px',
    flexShrink: 0,
    justifyContent: 'flex-start',
  },
};
