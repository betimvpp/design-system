import { colors } from '@betimvpp-ui/tokens';
import React from 'react';
import { getContrast } from 'polished';

export function ColorsGrid() {
    return Object.entries(colors).map(([key, color]) => {
        return (
            <div key={color} style={{ backgroundColor: color, padding: '2rem' }}>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    fontFamily: 'monospace',
                    color: getContrast(color, '#fff') < 3.5 ? '#000' : '#fff'
                }}>
                    <strong>${key}</strong>
                </div>
            </div>
        )
    })
}