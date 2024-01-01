import { Dropdown } from 'flowbite-react';

export default function Drop() {
  return (
    <Dropdown label="Data Type" dismissOnClick={false}>
      <Dropdown.Item>Integer</Dropdown.Item>
      <Dropdown.Item>Float</Dropdown.Item>
      <Dropdown.Item>Character</Dropdown.Item>
      <Dropdown.Item>String</Dropdown.Item>
    </Dropdown>
  );
}