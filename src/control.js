import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import { Actions } from 'react-native-router-flux'


export default class Controls extends Component {
    render() {
        return (
            <Container>
                <Content>
                    <Button rounded success>
                        <Text>On / Off</Text>
                    </Button>
                    <Button rounded dark>
                        <Text>Dim</Text>
                    </Button>
                    <Button rounded light>
                        <Text>Brighten</Text>
                    </Button>
                    <Button rounded danger onPress={() => {Actions.nav_settings();}}>
                        <Text>Settings</Text>
                    </Button>
                </Content>
            </Container>
        );
    }
}