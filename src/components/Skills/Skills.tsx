import { FC } from 'react';
import {
    Container,
    VStack,
    Stack,
    Heading,
    StackDivider,
    useColorModeValue,
    Box
} from '@chakra-ui/react'
import {
    SiFlask,
    SiHtml5,
    SiJava,
    SiPhp,
    SiPython,
    SiReact,
    SiTypescript,
    SiBootstrap,
    SiMysql,
    SiMongodb,
    SiVisualstudiocode,
    SiGit,
    SiLatex,
    SiDocker,
    SiGo,
    SiNodedotjs,
    SiPostgresql,
    SiC,
    SiFirebase,
    SiCsharp,
    SiDotnet,
    SiAmazonaws,
    SiTailwindcss,
    SiChakraui
} from 'react-icons/si';
import { Element } from 'react-scroll';
import Fade from 'react-reveal/Fade';
import SkillSection from './SkillSection';
import SkillItem from './SkillItem';

const Skills: FC = () => {
    return (
        <Element name='skills'>
            <Container maxW={'5xl'} p={6.5} mt={20}>
                <VStack spacing={8}>
                    <Fade>
                        <Heading as='h2'>Skills</Heading>
                    </Fade>
                    <Fade bottom cascade duration={500}>
                        <Box>
                            <Stack direction={'row'}>
                                <Stack
                                    direction={['column', 'row']}
                                    divider={
                                        <StackDivider borderColor={useColorModeValue('gray.300', 'gray.600')} />
                                    }
                                    spacing={8}
                                    align={'flex-start'}
                                    bg={useColorModeValue('white', 'gray.900')}
                                    opacity={0.9}
                                    p={5}
                                    rounded={'xl'}
                                    boxShadow={'lg'}
                                >
                                    <SkillSection title={'Languages'}>
                                        <SkillItem icon={SiPython} name='Python' />
                                        <SkillItem icon={SiTypescript} name='Typescript' />
                                        <SkillItem icon={SiJava} name='Java' />
                                        <SkillItem icon={SiPhp} name='PHP' />
                                        <SkillItem icon={SiHtml5} name='HTML/CSS' />
                                        <SkillItem icon={SiGo} name='Golang' />
                                        <SkillItem icon={SiC} name='C' />
                                        <SkillItem icon={SiCsharp} name='C#' />
                                    </SkillSection>
                                    <SkillSection title={'Frameworks'}>
                                        <SkillItem icon={SiReact} name='ReactJS' />
                                        <SkillItem icon={SiNodedotjs} name='NodeJS' />
                                        <SkillItem icon={SiDotnet} name='.NET Core' />
                                        <SkillItem icon={SiFlask} name='Flask' />
                                        <SkillItem icon={SiChakraui} name='ChakraUI' />
                                        <SkillItem icon={SiBootstrap} name='Bootstrap' />
                                        <SkillItem icon={SiTailwindcss} name='Tailwind CSS' />
                                    </SkillSection>
                                </Stack>
                                <Stack
                                    direction={['column', 'row']}
                                    divider={
                                        <StackDivider borderColor={useColorModeValue('gray.300', 'gray.600')} />
                                    }
                                    spacing={8}
                                    align={'flex-start'}
                                    bg={useColorModeValue('white', 'gray.900')}
                                    opacity={0.9}
                                    p={5}
                                    rounded={'xl'}
                                    boxShadow={'lg'}
                                >
                                    <SkillSection title={'Databases'}>
                                        <SkillItem icon={SiMysql} name='MySQL' />
                                        <SkillItem icon={SiPostgresql} name='PostgreSQL' />
                                        <SkillItem icon={SiMongodb} name='MongoDB' />
                                        <SkillItem icon={SiFirebase} name='Firestore' />
                                    </SkillSection>
                                    <SkillSection title={'Other tools'}>
                                        <SkillItem icon={SiGit} name='Git' />
                                        <SkillItem icon={SiLatex} name='LaTeX' />
                                        <SkillItem icon={SiDocker} name='Docker' />
                                        <SkillItem icon={SiVisualstudiocode} name='VS Code' />
                                        <SkillItem icon={SiAmazonaws} name='AWS' />
                                    </SkillSection>
                                </Stack>
                            </Stack>
                        </Box>
                    </Fade>
                </VStack>
            </Container>
        </Element>
    );
};

export default Skills;