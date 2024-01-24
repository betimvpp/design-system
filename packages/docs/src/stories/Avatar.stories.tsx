import type { Meta, StoryObj } from '@storybook/react'
import { Avatar, AvatarProps } from '@betimvpp-ui/react'

export default {
    title: 'Typography/Avatar',
    component: Avatar,

    args: {
        src: "https://github.com/betimvpp.png"
    },

    argTypes: {
        src: {
            control: {
                type: 'text',
            },
        },
    },
    
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
    args: {
        src: undefined
    }
}
