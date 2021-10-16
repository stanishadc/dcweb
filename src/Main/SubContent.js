import React, { Component } from 'react'
import ArtificialIntelligence from '../Services/ArtificialIntelligence';
import SubFooter from './SubFooter';
import SubHeader from './SubHeader';
export default class SubContent extends Component {
    render() {
        return (
            <div>
                <SubHeader></SubHeader>
                <ArtificialIntelligence></ArtificialIntelligence>
            <SubFooter></SubFooter>
            </div>
        )
    }
}
