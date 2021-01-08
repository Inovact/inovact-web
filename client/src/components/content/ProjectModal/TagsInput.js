import React from 'react';
import style from 'react-style-tag';

const TagsInput = (props) => {
  const [tags, setTags] = React.useState(props.tags);
  const addTags = (event) => {
    if (event.keyCode === 188 && event.target.value !== '') {
      event.preventDefault();
      setTags([...tags, event.target.value]);
      props.selectedTags([...tags, event.target.value]);
      event.target.value = '';
    }
  };

  const removeTags = (index) => {
    setTags([...tags.filter((tag) => tags.indexOf(tag) !== index)]);
  };
  return (
    <div>
      <div className='tags-input'>
        <ul
          id='tags'
          style={{ display: 'flex', flexWrap: 'wrap', padding: '0' }}
        >
          {tags.map((tag, index) => (
            <li
              style={{
                width: 'auto',
                height: '32px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                padding: '0 8px',
                fontSize: '14px',
                listStyle: 'none',
                borderRadius: '6px',
                margin: '0 8px 8px 0',
                background: 'orange',
              }}
              className='tag'
              key={index}
            >
              <span className='tag-title'>{tag}</span>
              <span
                style={{
                  display: 'block',
                  width: '16px',
                  height: '16px',
                  lineHeight: '16px',
                  textAlign: 'center',
                  color: '#0052cc',
                  background: '#fff',
                  borderRadius: '50%',
                  marginLeft: '8px',
                  fontSize: '14px',
                }}
                className='tag-close-icon'
                onClick={() => removeTags(index)}
              >
                x
              </span>
            </li>
          ))}
        </ul>
        <input
          type='text'
          onKeyUp={(event) => addTags(event)}
          placeholder='Press comma(,) to add tags'
        />
      </div>
      <style>
        {`
                    .tags-input {
                        display: flex;
                        align-items: flex-start;
                        flex-wrap: wrap;
                        min-height: 48px;
                    }
                    input {
                        flex: 1;
                        border: none;
                        height: 46px;
                        font-size: 14px;
                        padding: 4px 0 0 0;
                        &:focus {
                            outline: transparent;
                        }
                    
                    #tags {
                        display: flex;
                        flex-wrap: wrap;
                        padding: 0;
                        margin: 8px 0 0 0;
                    }
                    
                    .tag {
                        width: auto;
                        height: 32px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        color: #fff;
                        padding: 0 8px;
                        font-size: 14px;
                        list-style: none;
                        border-radius: 6px;
                        margin: 0 8px 8px 0;
                        background: #0052cc;
                       
                        
                    }
                    .tag-close-icon {
                            display: block;
                            width: 16px;
                            height: 16px;
                            line-height: 16px;
                            text-align: center;
                            font-size: 14px;
                            margin-left: 8px;
                            color: #0052cc;
                            border-radius: 50%;
                            background: #fff;
                            cursor: pointer;
                        }
                     .tag-title {
                            margin-top: 3px;
                        }
                    
                    @media screen and (max-width: 567px) {
                        .tags-input {
                            width: calc(100vw - 32px);
                        }
                    }
                       
                      
                        
                    `}
      </style>
    </div>
  );
};
export default TagsInput;
