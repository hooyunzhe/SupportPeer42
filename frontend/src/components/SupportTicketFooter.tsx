import { Avatar, Badge, Flex, Text } from "@mantine/core"

interface SupportTicketFooterProp {
  user: string
  importance: string
  category: string
}

export default function SupportTicketFooter({user, importance, category} : SupportTicketFooterProp) {
  return<Flex h='25%' justify='space-between' w='100%' align='center' gap='30'>
    <Flex align='center'>
    <Avatar></Avatar>
    <Text color="blue">{user}</Text>
    </Flex>
    <Flex justify='space-around' mr='3%' w='32%'>
    <Badge color="grey">{importance}</Badge>
    <Badge color="grey">{category}</Badge>
    </Flex>
  </Flex>
}