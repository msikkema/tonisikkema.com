export type Headings = 'ABOUT' | 'RESEARCH' | 'VOLUNTEERING' | 'CONTACT';

export type HeaderLinkProps = {
  text: string;
  selected: Headings;
  link: string;
};

export type HeaderProps = {
  selected: Headings;
};