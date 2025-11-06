// components/JobBoard/Searchbar.tsx
"use client"
import { useState } from 'react'

interface SearchHeaderProps {
    title?: string
}

// Sample data for states and their suburbs
const australianLocations = [
    { value: '', label: 'All States', type: 'state' },
    { value: 'nsw', label: 'New South Wales', type: 'state' },
    { value: 'nsw-sydney', label: '→ Sydney', type: 'suburb', parent: 'nsw' },
    { value: 'nsw-newcastle', label: '→ Newcastle', type: 'suburb', parent: 'nsw' },
    { value: 'nsw-wollongong', label: '→ Wollongong', type: 'suburb', parent: 'nsw' },
    { value: 'nsw-central-coast', label: '→ Central Coast', type: 'suburb', parent: 'nsw' },
    { value: 'vic', label: 'Victoria', type: 'state' },
    { value: 'vic-melbourne', label: '→ Melbourne', type: 'suburb', parent: 'vic' },
    { value: 'vic-geelong', label: '→ Geelong', type: 'suburb', parent: 'vic' },
    { value: 'vic-ballarat', label: '→ Ballarat', type: 'suburb', parent: 'vic' },
    { value: 'vic-bendigo', label: '→ Bendigo', type: 'suburb', parent: 'vic' },
    { value: 'qld', label: 'Queensland', type: 'state' },
    { value: 'qld-brisbane', label: '→ Brisbane', type: 'suburb', parent: 'qld' },
    { value: 'qld-gold-coast', label: '→ Gold Coast', type: 'suburb', parent: 'qld' },
    { value: 'qld-sunshine-coast', label: '→ Sunshine Coast', type: 'suburb', parent: 'qld' },
    { value: 'qld-cairns', label: '→ Cairns', type: 'suburb', parent: 'qld' },
    { value: 'wa', label: 'Western Australia', type: 'state' },
    { value: 'wa-perth', label: '→ Perth', type: 'suburb', parent: 'wa' },
    { value: 'wa-mandurah', label: '→ Mandurah', type: 'suburb', parent: 'wa' },
    { value: 'wa-bunbury', label: '→ Bunbury', type: 'suburb', parent: 'wa' },
    { value: 'sa', label: 'South Australia', type: 'state' },
    { value: 'sa-adelaide', label: '→ Adelaide', type: 'suburb', parent: 'sa' },
    { value: 'sa-mount-gambier', label: '→ Mount Gambier', type: 'suburb', parent: 'sa' },
    { value: 'tas', label: 'Tasmania', type: 'state' },
    { value: 'tas-hobart', label: '→ Hobart', type: 'suburb', parent: 'tas' },
    { value: 'tas-launceston', label: '→ Launceston', type: 'suburb', parent: 'tas' },
    { value: 'act', label: 'Australian Capital Territory', type: 'state' },
    { value: 'act-canberra', label: '→ Canberra', type: 'suburb', parent: 'act' },
    { value: 'nt', label: 'Northern Territory', type: 'state' },
    { value: 'nt-darwin', label: '→ Darwin', type: 'suburb', parent: 'nt' },
    { value: 'nt-alice-springs', label: '→ Alice Springs', type: 'suburb', parent: 'nt' }
]

const SearchHeader = ({
    title = "Your Website"
}: SearchHeaderProps) => {
    const [searchQuery, setSearchQuery] = useState('')
    const [selectedLocation, setSelectedLocation] = useState('')
    const [expandedState, setExpandedState] = useState<string | null>(null)

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault()
        
        // Extract state and suburb from selected location
        let state = ''
        let suburb = ''
        
        if (selectedLocation.includes('-')) {
            const parts = selectedLocation.split('-')
            state = parts[0]
            suburb = selectedLocation
        } else {
            state = selectedLocation
        }
        
        console.log('Search:', searchQuery, 'State:', state, 'Suburb:', suburb)
    }

    const handleLocationChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const value = e.target.value
        setSelectedLocation(value)
        
        // If a state is selected, expand/collapse it
        if (value && australianLocations.find(loc => loc.value === value && loc.type === 'state')) {
            setExpandedState(expandedState === value ? null : value)
        }
    }

    const isStateExpanded = (stateValue: string) => {
        return expandedState === stateValue
    }

    const getSuburbsForState = (stateValue: string) => {
        return australianLocations.filter(loc => 
            loc.type === 'suburb' && loc.parent === stateValue
        )
    }

    return (
        <header style={{ padding: '25px', borderBottom: '2px solid #e5e7eb', backgroundColor: '#f8fafc' }}>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                maxWidth: '1400px',
                margin: '0 auto'
            }}>
                {/* Left Side - Title */}
                <h1 style={{
                    margin: 0,
                    fontSize: '32px',
                    fontWeight: '700',
                    color: '#1f2937',
                    background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                }}>
                    {title}
                </h1>

                {/* Right Side - Search Form */}
                <form onSubmit={handleSearch} style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                    {/* Search Input */}
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search jobs, companies, keywords..."
                        style={{
                            padding: '14px 20px',
                            border: '2px solid #d1d5db',
                            borderRadius: '12px',
                            width: '320px',
                            fontSize: '16px',
                            backgroundColor: 'white',
                            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                            transition: 'all 0.3s ease',
                            outline: 'none'
                        }}
                        onFocus={(e) => {
                            e.target.style.borderColor = '#3b82f6'
                            e.target.style.boxShadow = '0 4px 12px rgba(59, 130, 246, 0.2)'
                        }}
                        onBlur={(e) => {
                            e.target.style.borderColor = '#d1d5db'
                            e.target.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)'
                        }}
                    />

                    {/* Location Dropdown with Expandable States */}
                    <select
                        value={selectedLocation}
                        onChange={handleLocationChange}
                        style={{
                            padding: '14px 20px',
                            border: '2px solid #d1d5db',
                            borderRadius: '12px',
                            width: '280px',
                            fontSize: '16px',
                            backgroundColor: 'white',
                            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                            transition: 'all 0.3s ease',
                            outline: 'none',
                            cursor: 'pointer'
                        }}
                        onFocus={(e) => {
                            e.target.style.borderColor = '#3b82f6'
                            e.target.style.boxShadow = '0 4px 12px rgba(59, 130, 246, 0.2)'
                        }}
                        onBlur={(e) => {
                            e.target.style.borderColor = '#d1d5db'
                            e.target.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)'
                        }}
                    >
                        {australianLocations.map((location) => {
                            // Show all states and "All States" option
                            if (location.type === 'state') {
                                return (
                                    <option key={location.value} value={location.value}>
                                        {location.label}
                                    </option>
                                )
                            }
                            // Show suburbs only if their parent state is expanded
                            if (location.type === 'suburb' && expandedState === location.parent) {
                                return (
                                    <option key={location.value} value={location.value}>
                                        {location.label}
                                    </option>
                                )
                            }
                            return null
                        })}
                    </select>

                    {/* Search Button */}
                    <button
                        type="submit"
                        style={{
                            padding: '14px 32px',
                            backgroundColor: '#3b82f6',
                            color: 'white',
                            border: 'none',
                            borderRadius: '12px',
                            fontSize: '16px',
                            fontWeight: '600',
                            cursor: 'pointer',
                            boxShadow: '0 4px 12px rgba(59, 130, 246, 0.4)',
                            transition: 'all 0.3s ease',
                            textTransform: 'uppercase',
                            letterSpacing: '0.5px'
                        }}
                        onMouseOver={(e) => {
                            e.currentTarget.style.backgroundColor = '#2563eb'
                            e.currentTarget.style.boxShadow = '0 6px 20px rgba(59, 130, 246, 0.6)'
                            e.currentTarget.style.transform = 'translateY(-2px)'
                        }}
                        onMouseOut={(e) => {
                            e.currentTarget.style.backgroundColor = '#3b82f6'
                            e.currentTarget.style.boxShadow = '0 4px 12px rgba(59, 130, 246, 0.4)'
                            e.currentTarget.style.transform = 'translateY(0)'
                        }}
                    >
                        Search
                    </button>
                </form>
            </div>
        </header>
    )
}

export default SearchHeader