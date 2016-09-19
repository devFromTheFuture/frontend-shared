import React, {Component} from 'react'
import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';

export class RenderInput extends Component {

   constructor(props) {
      super(props)
   }

   render(){

      const
        { className, input, hintText, type, meta: { asyncValidating, touched, error }} = this.props

      return(
      <div>
         <TextField
           hintText={hintText}
           className={className}
           multiLine={true}
           maxRows={10}
           errorText={touched ? error : ''}
           {...input}
             />  
      </div>
      )
   }
}

export const RenderCheckbox = ({ input, label, checkedIcon, uncheckedIcon }) => (
  <Checkbox 
      checkedIcon={checkedIcon}
      uncheckedIcon={uncheckedIcon}
      label={label}
      checked={input.value ? true : false}
      onCheck={input.onChange}/>
)

