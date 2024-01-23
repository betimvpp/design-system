import type { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from '@ignite-ui/react'

export default {
    title: 'Typography/Text',
    component: Text,

    args: {
        children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo dolorum ea in, odio voluptates quidem necessitatibus. Neque vel sapiente suscipit laudantium natus ad iure corporis porro voluptate, architecto enim nesciunt?',
    }

} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const Secondary: StoryObj<TextProps> = {
    args:{
        children: 'Strong Text',
        as: 'strong'
    }
}
