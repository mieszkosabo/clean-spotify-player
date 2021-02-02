import React from 'react';
import { GithubLinkWrapper } from './GithubLinkWrapper';
const githubLogo = require('../../../../assets/github_logo.png');

export const GithubLink = ({ onClick }) => (
  <GithubLinkWrapper onClick={onClick} src={githubLogo} />
)