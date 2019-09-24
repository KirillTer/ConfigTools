import React from 'react'
import { Form } from 'semantic-ui-react'

function ErrorField(props) {
    const {name, icon, placeholder, input, type, meta: {error, touched}} = props
    return (
        <>
            <Form.Input
                fluid
                name={name}
                icon={icon}
                iconPosition="left"
                placeholder={placeholder}
                type={type}
                {...input}
                error={(error && touched) ? error : null}
              />
        </>
    )
}

ErrorField.propTypes = {
}

export default ErrorField