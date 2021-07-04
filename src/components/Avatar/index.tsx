import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Image } from 'react-native';
import { theme } from '../../global/styles/theme';

import { styles } from './styles';

type Props = {
	urlImage: string;
}
export function Avatar({ urlImage }: Props) {
	const { secondary80, secondary100} = theme.colors;

	return (
		<LinearGradient
			style={styles.container}
			colors={[theme.colors.secondary80, theme.colors.secondary100]}
		>
			<Image 
				source={{ uri: urlImage }}
				style={styles.avatar}	
			/>
		</LinearGradient> 
	)
}