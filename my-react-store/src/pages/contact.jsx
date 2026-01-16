import './contact.css'
import { IconMail } from '@tabler/icons-react';
import { IconEdit } from '@tabler/icons-react';

function Contact(){
    return (
        <main>
            <IconEdit stroke={2} size={200} />
        <form class="container border p-5 bg-light mt-5">
            <fieldset>
                <legend>Personal Information</legend>
                <div>
                    <label class="form-label">name: </label>
                    <input class="form-control" type="text"/>
                </div>
                <div>
                    <label class="form-label">email: </label>
                    <input class="form-control" type="email"/>
                </div>
                <div>
                    <label class="form-label">phone: </label>
                    <input class="form-control" type="tel"/>
                </div>
                <div>
                    <label class="form-label">message: </label>
                    <textarea class="form-control"></textarea>
                </div>
                <button type="submit" class="btn btn-primary mb-3"><IconMail/>submit</button>
            </fieldset>
        </form>
        </main>
    )
}

export default(Contact)