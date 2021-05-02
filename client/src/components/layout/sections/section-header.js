import React from 'react';
import { Box, Text, Heading } from 'theme-ui';

export default function SectionHeader({ title, description }) {
  return (
    <Box sx={{ variant: 'sectionHeader' }}>
      <Heading
        as="h4"
        sx={{
          variant: 'sectionHeader.title',
          display: 'flex',
          justifyContent: 'center',
          alignItems:'center'
        }}
      >
        {title}
      </Heading>
      <Text
        as="p"
        sx={{
          variant: 'sectionHeader.description',
          fontSize: '16px'
        }}
      >
        {description}
      </Text>
    </Box>
  );
}
