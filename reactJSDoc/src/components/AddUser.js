import {
    Form,
    FormGroup,
    Label,
    Input,
    Button
} from 'reactstrap';

export default function AddUser() {
    return (
       <Form>
           <FormGroup>
            <Label>Name</Label>
            <Input type='text' placeholder='Enter'></Input>
           </FormGroup>
           <Button type='submit'>Submit</Button>
       </Form>
    );
}