import betterBuildWinsSmall from '../../../assets/img/betterBuildWins-small.png';
import betterBuildWinsMedium from '../../../assets/img/betterBuildWins-medium.png';
import betterBuildWinsLarge from '../../../assets/img/betterBuildWins-large.png';

import listThisDemo from '../../../assets/img/video/listThisDemo.webm';

export type MediaType = 'webm' | 'mp4' | 'png';

interface FileSizeInterface {
  small?: string;
  medium?: string;
  large?: string;
}
export interface MediaInterface {
  video?: string;
  files?: FileSizeInterface;
}

export interface ProjectInterface {
  projectName: string;
  media: MediaInterface;
  mediaType: MediaType;
  projectDescription: string;
  githubUrl: string;
  githubUrlTitle: string;
}

export const projects: ProjectInterface[] = [
  {
    projectName: 'ListThis',
    media: {
      video: listThisDemo,
    },
    mediaType: 'webm',
    projectDescription:
      'ListThis is a mobile application built with React Native. It is a simple todo list application where you can create an account and create lists with tasks. You can add users to have access to lists that you create and share lists. Good for families that have a hard time coordinating grocery needs!',
    githubUrl: 'https://github.com/j-e-torres/ListThis',
    githubUrlTitle: 'Github',
  },
  {
    projectName: 'betterBuildWins',
    media: {
      files: {
        small: betterBuildWinsSmall,
        medium: betterBuildWinsMedium,
        large: betterBuildWinsLarge,
      },
    },
    mediaType: 'png',
    projectDescription:
      'League of Legends tool where you can customize parameters and test out different combinations of Champions and Items to see what stats you gain. This includes a Champion stats breakdown similar to what you see in game. You can also view your calculated Auto Attack DPS and Effective HP. The website is still a work in progress.',
    githubUrl: 'https://github.com/j-e-torres/betterBuildWins',
    githubUrlTitle: 'Github',
  },
];
