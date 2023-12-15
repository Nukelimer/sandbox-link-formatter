import React, { useState} from 'react';
import Input from '../Input/Input';

function Parent() {
  const [input, setInput]= useState('')
  return <Input input={input } setInput={setInput} />
}

export default Parent;
