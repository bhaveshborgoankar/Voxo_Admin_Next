import React from 'react';
import { X } from 'react-feather';
import { Form } from 'reactstrap';
const SearchBar = () => {
  return (
    <Form className='form-inline search-full col' action='#javascript' method='get'>
      <div className='form-group w-100'>
        <div className='Typeahead Typeahead--twitterUsers'>
          <div className='u-posRelative'>
            <input className='demo-input Typeahead-input form-control-plaintext w-100' type='text' placeholder='Search Voxo ..' name='q' title='' autoFocus />
            <X className='close-search' />
            <div className='spinner-border Typeahead-spinner' role='status'>
              <span className='sr-only'>Loading...</span>
            </div>
          </div>
          <div className='Typeahead-menu'></div>
        </div>
      </div>
    </Form>
  );
};
export default SearchBar;
