
import React from 'react';
import { Editor } from '@tinymce/tinymce-react';

class RichText extends React.Component {
  handleEditorChange = (e) => {
    console.log(
      'Content was updated:',
      e.target.getContent()
    );
  }

  render() {
    return (
      <div className='container'>
          <Editor
            initialValue="<p>Initial content</p>"
            apiKey="g5inqgf9z3os7zv1s4qo5aieynsz1rz1yi0mo5a7l2l17qr5"
            init={{
            height: 500,
            menubar: false,
            plugins: [
                'advlist autolink lists link image',
                'charmap print preview anchor help',
                'searchreplace visualblocks code',
                'insertdatetime media table paste wordcount'
            ],
            toolbar:
                'undo redo | formatselect | bold italic | \
                alignleft aligncenter alignright | \
                bullist numlist outdent indent | help'
            }}
            onChange={this.handleEditorChange}
        />
      </div>
    );
  }
}

export default RichText;