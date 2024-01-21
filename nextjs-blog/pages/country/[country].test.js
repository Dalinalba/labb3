// pages/country/[country].test.js
import React from 'react'
import { render, screen } from '@testing-library/react'
import Country from './[country]'

describe('Country Page', () => {
    it('renders the component', () => {
        const mockProps = {
            newsData: [
                { title: 'News 1', description: 'Description 1' },
                { title: 'News 2', description: 'Description 2' }
            ],
            country: 'us'
        }

        render(<Country {...mockProps} />)

        // Check if the component renders correctly
        expect(screen.getByText('Top Headlines in us')).toBeInTheDocument()
    })
})
