import React from 'react';
import axios from 'axios';
import { PaintingsCategorie } from './PaintingsCategorie';

export class PaintLandscape extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			landscapeData: []
		};
	}

	componentDidMount() {
		axios.get('/paint-landscape')
		.then((res) => this.setState({
			landscapeData: res.data.landscapeData

		}))
	}
	render() {
		return (
			<PaintingsCategorie categorieData={this.state.landscapeData} />
		)
	}
}

// categorie={this.state.landscapeData[0].categorie}