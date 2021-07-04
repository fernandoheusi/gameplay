import React from 'react';
import { Image, Text} from 'react-native';

import { styles } from './styles';

export function GuildIcon(){
	const uri = 'https://img2.gratispng.com/20180716/gjb/kisspng-discord-computer-icons-logo-smiley-decal-avatar-discord-5b4c86db5cb894.5744109815317419153798.jpg';
	// const uri = 'https://w7.pngwing.com/pngs/191/229/png-transparent-computer-icons-discord-logo-judgment-apocalypse-survival-simulation-discord-face-logo-computer-wallpaper.png';
	return(
		<Image 
			source={{ uri }}
			style={styles.image}
			resizeMode="cover"
		/>
	)
}