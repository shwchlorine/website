import { FC } from 'react';
import {
    Box,
    Text,
    Icon,
    useColorModeValue,
    Flex,
    Spacer,
    IconButton
} from '@chakra-ui/react';
import { FaHeart } from 'react-icons/fa';
import Socials from '../global/Socials';
import { ChevronUpIcon } from '@chakra-ui/icons';
const Scroll = require('react-scroll');
const scroll = Scroll.animateScroll;

const Footer: FC = () => {
    return (
        <Box w={'100%'} p={'2rem'} mt={20} bg={useColorModeValue('gray.100', 'gray.900')} textAlign='left'>
            <Flex alignItems={'center'} px={2}>
                <Text mr={2}>
                    © {new Date().getFullYear()} Derrick Yen – made using ReactJS
                </Text>
                <Spacer/>
                <Socials color={useColorModeValue('#5a657c', '#9199a9')} size='1.25rem' />
                <IconButton
                    colorScheme='teal'
                    variant='outline'
                    onClick={() => {
                        scroll.scrollToTop({ duration: 350 })
                    }}
                    icon={<ChevronUpIcon fontSize={20}/>}
                    aria-label='Scroll to top'
                    borderRadius={'full'}
                    border={'2px'}
                    ml={8}
                >
                </IconButton>
            </Flex>
        </Box>
    );
};

export default Footer;
