/* Sets Page title for websites pages. */ 

export default function PageTitle({ title, description }) {
  document.querySelector('title').innerHTML = title;
  return null;
}