import React, { Component } from 'react';
import { Container, Title, Content, Button, Icon, Text, Item, Input } from 'native-base';


export default class Settings extends Component {
    render() {
        return (
            <Container>
                <Content>
                    <Text>Hue Bridge IP</Text>
                    <Item regular>
                        <Input placeholder='IP Address'/>
                    </Item>
                </Content>
            </Container>
        );
    }
}