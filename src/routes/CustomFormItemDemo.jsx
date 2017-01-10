import React, {Component, Children, cloneElement} from 'react'
import { Button, Form, Input } from 'antd'

class CustomFormItemDemo extends Component {

    constructor() {
        super()
        this.state = {}
    }

    handleChange = () => {
        this.setState({ok: !this.state.ok})
    }

    render() {
        const {form} = this.props
        return (
            <div style={{width: 500}}>
                <p>Antd FormItem 遇到 cloneElement生成的children时，会出现运行错误</p>
                <Form>
                    <CustomFormItem disabled={this.state.ok}>
                        <Input {...form.getFieldProps('name',{initialValue: 'Justin'})} />
                    </CustomFormItem>

                    <CustomFormItem>
                        <Button onClick={this.handleChange}>change</Button>
                    </CustomFormItem>
                </Form>
            </div>
        )
    }
}

export default Form.create()(CustomFormItemDemo)

class CustomFormItem extends Component {

    render() {
        let {children, disabled, ...rest} = this.props
        if (disabled) {
            //children = Children.map(children, child => child)  // 会出错
            //children = Children.map(children, child => cloneElement(child, {disabled})) // 会出错
            children = cloneElement(children, {disabled}) // 当children是单个时，用cloneElement(children) 可以解决出错
        }
        return (
            <Form.Item>
                {children}
            </Form.Item>
        )
    }
}
