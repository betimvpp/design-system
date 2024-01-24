import type { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from '@betimvpp-ui/react'

export default {
    title: 'Typography/Text',
    component: Text,

    args: {
        size: 'md',
        children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo dolorum ea in, odio voluptates quidem necessitatibus. Neque vel sapiente suscipit laudantium natus ad iure corporis porro voluptate, architecto enim nesciunt?',
    },
    argTypes: {
        size: {
            options: [
                'xxs',
                'xs',
                'sm',
                'md',
                'lg',
                'xl',
                '2xl',
                '4xl',
                '5xl',
                '6xl',
                '7xl',
                '8xl',
                '9xl',
            ],
            control: {
                type: 'inline-radio',
            },
        },
    },

} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const Secondary: StoryObj<TextProps> = {
    args: {
        children: 'Strong Text',
        as: 'strong'
    }
}
