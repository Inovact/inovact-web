import React from 'react';
import TagsInput from './TagsInput';
import style from 'react-style-tag';

let tags;

export const Form = ({ onSubmit, closeModal }) => {
  const selectedTags = (tag) => {
    tags = JSON.stringify(tag);
    console.log(tags);
    document.getElementById('tags').value = tags;
  };

  const status = [
    { id: 1, value: 'complete' },
    { id: 2, value: 'incomplete' },
    { id: 3, value: 'inprogress' },
  ];

  const statusAll =
    status.length > 0 &&
    status.map((item, i) => {
      return (
        <option key={i} value={item.value}>
          {item.value}
        </option>
      );
    });

  return (
    <div>
      <form
        onSubmit={onSubmit}
        style={{ transition: '600ms ease' }}
        encType='multipart/form-data'
      >
        <div className='form-group'>
          <input
            className='form-control'
            id='tags'
            defaultValue=''
            type='hidden'
          />
        </div>
        <div className='form-group'>
          <label htmlFor='title'>Name</label>
          <input
            type='text'
            style={{ height: '20px', fontFamily: 'poppins' }}
            className='form-control'
            id='title'
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor='description'>Description</label>
          <textarea
            style={{
              fontFamily: 'poppins',
            }}
            className='form-control materialize-textarea'
            id='description'
            data-length='10'
            required
          />
        </div>
        <div className='form-group'>
          <label>project status</label>
          <select
            className='form-control'
            id='status'
            style={{
              height: '50px',
              fontFamily: 'poppins',
              display: 'flex',
              border: 'none',
              borderBottom: '2px solid',
              borderBottomColor: '#b6b6b6',
            }}
          >
            {statusAll}
          </select>
        </div>
        <div className='file-field input-field'>
          <div
            className='btn btn-small'
            style={{
              backgroundColor: 'orange',
              width: '100px',
              height: '40px',
            }}
          >
            <span>Upload Documents</span>
            <input
              type='file'
              multiple
              id='file'
              onChange={(e) => console.log(e.target.files)}
              style={{ height: '50px' }}
            />
          </div>
          <div className='file-path-wrapper'>
            <input
              class='file-path validate'
              type='text'
              id='file'
              placeholder='Upload one or more files'
            />
          </div>
        </div>
        <div className='form-group'>
          <TagsInput id='tags' selectedTags={selectedTags} tags={['nodejs']} />
        </div>
        <div className='form-group'>
          <button
            style={{ background: '#23232e' }}
            className='form-control btn btn-primary'
            type='submit'
          >
            Submit
          </button>
        </div>
      </form>
      <style>
        {`
                input[type="text"]:focus,textarea:focus{
                    border-bottom:1px solid orange  !important;
                    border-shadow:0 1px 0 0 orange !important;
                    -webkit-box-shadow:0 1px 0 0 orange !important;
                }
                `}
      </style>
    </div>
  );
};
