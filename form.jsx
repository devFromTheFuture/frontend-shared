import React, {Component} from 'react'
import TextField from 'material-ui/TextField';

export default class RenderInput extends Component {

   constructor(props) {
      super(props)
   }

   render(){

      const { input, label, type, meta: { asyncValidating, touched, error }} = this.props

      return(
      <div>
         <TextField
           floatingLabelText={label}
           floatingLabelFixed={true}
           multiLine={true}
           maxRows={10}
           errorText={touched ? error : ''}
           {...input}  />  
      </div>
      )
   }
}