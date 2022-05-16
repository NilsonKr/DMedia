import React from 'react';
//UI
import { Heading, Text, VStack, HStack } from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';
//HOC
import { ConnectAnimation } from '@components/HOC'

export const LoggedIn = ConnectAnimation(() => {
	return (
		<VStack spacing={5}>
			<Heading>Welcome back NilsonKr! 🎉</Heading>
			<HStack spacing={4} align='center'>
				<CheckCircleIcon color='green.300' w='40px' h='40px' />
				<Text fontSize='lg'>Logged In</Text>
			</HStack>
		</VStack>
	);
});
