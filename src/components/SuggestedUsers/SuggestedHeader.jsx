import { Avatar, Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'

const SuggestedHeader = () => {
  return (
   <Flex alignItems={'center'} gap={2}>
    <Avatar name='fracis' size={'lg'} src='https://bit.ly/tioluwani-kolawole'/>
    <Text fontSize={12} fontWeight={'bold'}>francis</Text>
   </Flex>
  )
}

export default SuggestedHeader