// components/JobBoard/Searchbar.tsx
"use client"
import { useState, useRef, useEffect } from 'react'

interface SearchHeaderProps {
    title?: string
}

// Enhanced data structure with cities under suburbs
const australianLocations = [
    { value: '', label: 'All States', type: 'state' },
    { value: 'nsw', label: 'New South Wales', type: 'state' },
    { value: 'nsw-sydney', label: 'Sydney', type: 'suburb', parent: 'nsw' },
    { value: 'nsw-sydney-cbd', label: 'CBD', type: 'city', parent: 'nsw-sydney' },
    { value: 'nsw-sydney-parramatta', label: 'Parramatta', type: 'city', parent: 'nsw-sydney' },
    { value: 'nsw-sydney-bondi', label: 'Bondi', type: 'city', parent: 'nsw-sydney' },
    { value: 'nsw-sydney-chatswood', label: 'Chatswood', type: 'city', parent: 'nsw-sydney' },
    { value: 'nsw-newcastle', label: 'Newcastle', type: 'suburb', parent: 'nsw' },
    { value: 'nsw-newcastle-cbd', label: 'Newcastle CBD', type: 'city', parent: 'nsw-newcastle' },
    { value: 'nsw-newcastle-hamilton', label: 'Hamilton', type: 'city', parent: 'nsw-newcastle' },
    { value: 'nsw-wollongong', label: 'Wollongong', type: 'suburb', parent: 'nsw' },
    { value: 'nsw-central-coast', label: 'Central Coast', type: 'suburb', parent: 'nsw' },
    
    { value: 'vic', label: 'Victoria', type: 'state' },
    { value: 'vic-melbourne', label: 'Melbourne', type: 'suburb', parent: 'vic' },
    { value: 'vic-melbourne-cbd', label: 'Melbourne CBD', type: 'city', parent: 'vic-melbourne' },
    { value: 'vic-melbourne-richmond', label: 'Richmond', type: 'city', parent: 'vic-melbourne' },
    { value: 'vic-melbourne-fitzroy', label: 'Fitzroy', type: 'city', parent: 'vic-melbourne' },
    { value: 'vic-geelong', label: 'Geelong', type: 'suburb', parent: 'vic' },
    { value: 'vic-ballarat', label: 'Ballarat', type: 'suburb', parent: 'vic' },
    { value: 'vic-bendigo', label: 'Bendigo', type: 'suburb', parent: 'vic' },
    
    { value: 'qld', label: 'Queensland', type: 'state' },
    { value: 'qld-brisbane', label: 'Brisbane', type: 'suburb', parent: 'qld' },
    { value: 'qld-brisbane-cbd', label: 'Brisbane CBD', type: 'city', parent: 'qld-brisbane' },
    { value: 'qld-brisbane-fortitude', label: 'Fortitude Valley', type: 'city', parent: 'qld-brisbane' },
    { value: 'qld-gold-coast', label: 'Gold Coast', type: 'suburb', parent: 'qld' },
    { value: 'qld-sunshine-coast', label: 'Sunshine Coast', type: 'suburb', parent: 'qld' },
    { value: 'qld-cairns', label: 'Cairns', type: 'suburb', parent: 'qld' },
    
    { value: 'wa', label: 'Western Australia', type: 'state' },
    { value: 'wa-perth', label: 'Perth', type: 'suburb', parent: 'wa' },
    { value: 'wa-mandurah', label: 'Mandurah', type: 'suburb', parent: 'wa' },
    { value: 'wa-bunbury', label: 'Bunbury', type: 'suburb', parent: 'wa' },
    
    { value: 'sa', label: 'South Australia', type: 'state' },
    { value: 'sa-adelaide', label: 'Adelaide', type: 'suburb', parent: 'sa' },
    { value: 'sa-mount-gambier', label: 'Mount Gambier', type: 'suburb', parent: 'sa' },
    
    { value: 'tas', label: 'Tasmania', type: 'state' },
    { value: 'tas-hobart', label: 'Hobart', type: 'suburb', parent: 'tas' },
    { value: 'tas-launceston', label: 'Launceston', type: 'suburb', parent: 'tas' },
    
    { value: 'act', label: 'Australian Capital Territory', type: 'state' },
    { value: 'act-canberra', label: 'Canberra', type: 'suburb', parent: 'act' },
    
    { value: 'nt', label: 'Northern Territory', type: 'state' },
    { value: 'nt-darwin', label: 'Darwin', type: 'suburb', parent: 'nt' },
    { value: 'nt-alice-springs', label: 'Alice Springs', type: 'suburb', parent: 'nt' }
]

const SearchHeader = ({
    title = "Your Website"
}: SearchHeaderProps) => {
    const [searchQuery, setSearchQuery] = useState('')
    const [selectedLocation, setSelectedLocation] = useState('')
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    const [hoveredState, setHoveredState] = useState<string | null>(null)
    const [clickedSuburb, setClickedSuburb] = useState<string | null>(null)
    const [isMobile, setIsMobile] = useState(false)
    const dropdownRef = useRef<HTMLDivElement>(null)

    // Check screen size and handle resize
    useEffect(() => {
        const checkScreenSize = () => {
            setIsMobile(window.innerWidth < 768)
        }

        checkScreenSize()
        window.addEventListener('resize', checkScreenSize)
        return () => window.removeEventListener('resize', checkScreenSize)
    }, [])

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsDropdownOpen(false)
                setHoveredState(null)
                setClickedSuburb(null)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault()
        
        // Extract state, suburb, and city from selected location
        let state = ''
        let suburb = ''
        let city = ''
        
        if (selectedLocation.includes('-')) {
            const parts = selectedLocation.split('-')
            if (parts.length === 2) {
                state = parts[0]
                suburb = selectedLocation
            } else if (parts.length === 3) {
                state = parts[0]
                suburb = `${parts[0]}-${parts[1]}`
                city = selectedLocation
            }
        } else {
            state = selectedLocation
        }
        
        console.log('Search:', searchQuery, 'State:', state, 'Suburb:', suburb, 'City:', city)
        setIsDropdownOpen(false)
        setHoveredState(null)
        setClickedSuburb(null)
    }

    const handleLocationSelect = (value: string) => {
        setSelectedLocation(value)
        setIsDropdownOpen(false)
        setHoveredState(null)
        setClickedSuburb(null)
    }

    const handleSuburbClick = (suburbValue: string) => {
        setClickedSuburb(clickedSuburb === suburbValue ? null : suburbValue)
    }

    const getDisplayText = () => {
        if (!selectedLocation) return "All Locations"
        const location = australianLocations.find(loc => loc.value === selectedLocation)
        return location ? location.label : "All Locations"
    }

    const getStates = () => {
        return australianLocations.filter(loc => loc.type === 'state' && loc.value !== '')
    }

    const getSuburbsForState = (stateValue: string) => {
        return australianLocations.filter(loc => 
            loc.type === 'suburb' && loc.parent === stateValue
        )
    }

    const getCitiesForSuburb = (suburbValue: string) => {
        return australianLocations.filter(loc => 
            loc.type === 'city' && loc.parent === suburbValue
        )
    }

    const hasCities = (suburbValue: string) => {
        return getCitiesForSuburb(suburbValue).length > 0
    }

    // Mobile-specific handlers
    const handleMobileStateClick = (stateValue: string) => {
        if (isMobile) {
            setHoveredState(hoveredState === stateValue ? null : stateValue)
            setClickedSuburb(null)
        } else {
            handleLocationSelect(stateValue)
        }
    }

    const handleMobileSuburbClick = (suburbValue: string) => {
        if (isMobile && hasCities(suburbValue)) {
            setClickedSuburb(clickedSuburb === suburbValue ? null : suburbValue)
        } else {
            handleLocationSelect(suburbValue)
        }
    }

    // Close all mobile dropdowns
    const closeAllMobileDropdowns = () => {
        setHoveredState(null)
        setClickedSuburb(null)
    }

    // Get current level for mobile breadcrumb
    const getMobileLevel = () => {
        if (clickedSuburb) return 'city'
        if (hoveredState) return 'suburb'
        return 'state'
    }

    // Get mobile breadcrumb text
    const getMobileBreadcrumb = () => {
        if (clickedSuburb) {
            const suburb = australianLocations.find(loc => loc.value === clickedSuburb)
            return suburb?.label || 'Cities'
        }
        if (hoveredState) {
            const state = australianLocations.find(loc => loc.value === hoveredState)
            return state?.label || 'Suburbs'
        }
        return 'All Locations'
    }

    return (
        <header style={{ 
            padding: isMobile ? '12px 16px' : '25px',
            borderBottom: '2px solid #e5e7eb', 
            backgroundColor: '#f8fafc' 
        }}>
            <div style={{
                display: 'flex',
                flexDirection: isMobile ? 'column' : 'row',
                justifyContent: 'space-between',
                alignItems: isMobile ? 'stretch' : 'center',
                gap: isMobile ? '16px' : '0',
                maxWidth: '1400px',
                margin: '0 auto'
            }} className='text-black'>
                {/* Left Side - Title */}
                <h1 style={{
                    margin: 0,
                    fontSize: isMobile ? '20px' : '32px',
                    fontWeight: '700',
                    color: '#1f2937',
                    background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    textAlign: isMobile ? 'center' : 'left',
                    lineHeight: isMobile ? '1.2' : '1'
                }}>
                    {title}
                </h1>

                {/* Right Side - Search Form */}
                <form onSubmit={handleSearch} style={{ 
                    display: 'flex', 
                    flexDirection: isMobile ? 'column' : 'row',
                    gap: isMobile ? '10px' : '15px', 
                    alignItems: 'center', 
                    position: 'relative',
                    width: isMobile ? '100%' : 'auto'
                }}>
                    {/* Search Input */}
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search jobs, companies, keywords..."
                        style={{
                            padding: isMobile ? '14px 16px' : '14px 20px',
                            border: '2px solid #d1d5db',
                            borderRadius: '10px',
                            width: isMobile ? '100%' : '320px',
                            fontSize: isMobile ? '16px' : '16px', // Larger font for mobile
                            backgroundColor: 'white',
                            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                            transition: 'all 0.3s ease',
                            outline: 'none',
                            WebkitAppearance: 'none' // Remove iOS styling
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

                    {/* Custom Location Dropdown */}
                    <div ref={dropdownRef} style={{ 
                        position: 'relative', 
                        width: isMobile ? '100%' : 'auto',
                        zIndex: 1000
                    }}>
                        {/* Dropdown Trigger */}
                        <div
                            onClick={() => {
                                setIsDropdownOpen(!isDropdownOpen)
                                if (isMobile) {
                                    closeAllMobileDropdowns()
                                }
                            }}
                            style={{
                                padding: isMobile ? '14px 16px' : '14px 20px',
                                border: '2px solid #d1d5db',
                                borderRadius: '10px',
                                width: isMobile ? '100%' : '280px',
                                fontSize: isMobile ? '16px' : '16px',
                                backgroundColor: 'white',
                                boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                                transition: 'all 0.3s ease',
                                outline: 'none',
                                cursor: 'pointer',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                minHeight: isMobile ? '52px' : 'auto' // Larger touch target
                            }}
                            onMouseEnter={(e) => {
                                if (!isMobile) {
                                    e.currentTarget.style.borderColor = '#3b82f6'
                                }
                            }}
                            onMouseLeave={(e) => {
                                if (!isMobile && !isDropdownOpen) {
                                    e.currentTarget.style.borderColor = '#d1d5db'
                                }
                            }}
                        >
                            <span style={{
                                fontSize: isMobile ? '16px' : '16px',
                                fontWeight: isMobile ? '500' : 'normal'
                            }}>
                                {getDisplayText()}
                            </span>
                            <span style={{ 
                                transform: isDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)', 
                                transition: 'transform 0.3s ease',
                                fontSize: isMobile ? '12px' : '12px'
                            }}>
                                ▼
                            </span>
                        </div>

                        {/* Dropdown Menu */}
                        {isDropdownOpen && (
                            <div style={{
                                position: isMobile ? 'fixed' : 'absolute',
                                top: isMobile ? '0' : '100%',
                                left: isMobile ? '0' : '0',
                                right: isMobile ? '0' : 'auto',
                                bottom: isMobile ? '0' : 'auto',
                                backgroundColor: 'white',
                                border: isMobile ? 'none' : '2px solid #d1d5db',
                                borderRadius: isMobile ? '0' : '12px',
                                boxShadow: isMobile ? 'none' : '0 8px 25px rgba(0,0,0,0.15)',
                                zIndex: 1001,
                                display: 'flex',
                                flexDirection: isMobile ? 'column' : (clickedSuburb ? 'row-reverse' : 'row'),
                                minHeight: isMobile ? '100vh' : '300px',
                                maxHeight: isMobile ? '100vh' : '400px',
                                marginTop: isMobile ? '0' : '5px',
                                width: isMobile ? '100vw' : 'auto',
                                overflow: 'hidden'
                            }}>
                                {/* Mobile Header */}
                                {isMobile && (
                                    <div style={{
                                        padding: '16px',
                                        backgroundColor: '#3b82f6',
                                        color: 'white',
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        borderBottom: '1px solid #2563eb'
                                    }}>
                                        <span style={{ 
                                            fontSize: '18px', 
                                            fontWeight: '600' 
                                        }}>
                                            {getMobileBreadcrumb()}
                                        </span>
                                        <button
                                            onClick={() => setIsDropdownOpen(false)}
                                            style={{
                                                background: 'none',
                                                border: 'none',
                                                color: 'white',
                                                fontSize: '20px',
                                                cursor: 'pointer',
                                                padding: '4px 8px',
                                                borderRadius: '4px'
                                            }}
                                            onTouchStart={(e) => {
                                                e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.2)'
                                            }}
                                            onTouchEnd={(e) => {
                                                e.currentTarget.style.backgroundColor = 'transparent'
                                            }}
                                        >
                                            ✕
                                        </button>
                                    </div>
                                )}

                                {/* Mobile Back Button */}
                                {isMobile && (hoveredState || clickedSuburb) && (
                                    <div
                                        onClick={() => {
                                            if (clickedSuburb) {
                                                setClickedSuburb(null)
                                            } else if (hoveredState) {
                                                setHoveredState(null)
                                            }
                                        }}
                                        style={{
                                            padding: '14px 16px',
                                            backgroundColor: '#f8fafc',
                                            borderBottom: '1px solid #e5e7eb',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '8px',
                                            cursor: 'pointer',
                                            fontSize: '16px',
                                            fontWeight: '500'
                                        }}
                                        onTouchStart={(e) => {
                                            e.currentTarget.style.backgroundColor = '#f1f5f9'
                                        }}
                                        onTouchEnd={(e) => {
                                            e.currentTarget.style.backgroundColor = '#f8fafc'
                                        }}
                                    >
                                        <span style={{ fontSize: '18px' }}>←</span>
                                        Back
                                    </div>
                                )}

                                {/* States Column */}
                                {(!isMobile || !hoveredState) && (
                                    <div style={{
                                        width: isMobile ? '100%' : '280px',
                                        borderRight: !isMobile && hoveredState && !clickedSuburb ? '1px solid #e5e7eb' : 'none',
                                        borderLeft: !isMobile && clickedSuburb ? '1px solid #e5e7eb' : 'none',
                                        maxHeight: isMobile ? 'calc(100vh - 120px)' : '400px',
                                        overflowY: 'auto',
                                        flexShrink: 0
                                    }}>
                                        {/* All Locations Option */}
                                        <div
                                            onClick={() => handleLocationSelect('')}
                                            style={{
                                                padding: isMobile ? '16px' : '12px 20px',
                                                cursor: 'pointer',
                                                backgroundColor: selectedLocation === '' ? '#f3f4f6' : 'white',
                                                borderBottom: '1px solid #f3f4f6',
                                                transition: 'background-color 0.2s ease',
                                                fontSize: isMobile ? '16px' : '16px',
                                                minHeight: isMobile ? '56px' : 'auto',
                                                display: 'flex',
                                                alignItems: 'center'
                                            }}
                                            onTouchStart={(e) => {
                                                if (isMobile) e.currentTarget.style.backgroundColor = '#f3f4f6'
                                            }}
                                            onTouchEnd={(e) => {
                                                if (isMobile && selectedLocation !== '') {
                                                    e.currentTarget.style.backgroundColor = 'white'
                                                }
                                            }}
                                        >
                                            All Locations
                                        </div>

                                        {/* States List */}
                                        {getStates().map((state) => (
                                            <div
                                                key={state.value}
                                                onClick={() => handleMobileStateClick(state.value)}
                                                onMouseEnter={() => !isMobile && setHoveredState(state.value)}
                                                style={{
                                                    padding: isMobile ? '16px' : '12px 20px',
                                                    cursor: 'pointer',
                                                    backgroundColor: selectedLocation === state.value ? '#f3f4f6' : 'white',
                                                    borderBottom: '1px solid #f3f4f6',
                                                    transition: 'background-color 0.2s ease',
                                                    display: 'flex',
                                                    justifyContent: 'space-between',
                                                    alignItems: 'center',
                                                    fontSize: isMobile ? '16px' : '16px',
                                                    minHeight: isMobile ? '56px' : 'auto'
                                                }}
                                                onTouchStart={(e) => {
                                                    if (isMobile) e.currentTarget.style.backgroundColor = '#f3f4f6'
                                                }}
                                                onTouchEnd={(e) => {
                                                    if (isMobile && selectedLocation !== state.value) {
                                                        e.currentTarget.style.backgroundColor = 'white'
                                                    }
                                                }}
                                            >
                                                <span>{state.label}</span>
                                                <span style={{ 
                                                    fontSize: isMobile ? '14px' : '12px', 
                                                    color: '#6b7280' 
                                                }}>
                                                    {isMobile ? '→' : '→'}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {/* Suburbs Column - Show when a state is selected */}
                                {(hoveredState && (!isMobile || !clickedSuburb)) && (
                                    <div style={{
                                        width: isMobile ? '100%' : '280px',
                                        borderRight: !isMobile && clickedSuburb ? '1px solid #e5e7eb' : 'none',
                                        borderLeft: !isMobile && !clickedSuburb ? '1px solid #e5e7eb' : 'none',
                                        maxHeight: isMobile ? 'calc(100vh - 120px)' : '400px',
                                        overflowY: 'auto',
                                        backgroundColor: isMobile ? 'white' : '#fafafa',
                                        flexShrink: 0
                                    }}>
                                        {!isMobile && (
                                            <div style={{
                                                padding: '12px 20px',
                                                fontWeight: '600',
                                                backgroundColor: '#e5e7eb',
                                                borderBottom: '1px solid #d1d5db',
                                                fontSize: '16px'
                                            }}>
                                                {getStates().find(s => s.value === hoveredState)?.label}
                                            </div>
                                        )}
                                        {getSuburbsForState(hoveredState!).map((suburb) => (
                                            <div
                                                key={suburb.value}
                                                onClick={() => handleMobileSuburbClick(suburb.value)}
                                                style={{
                                                    padding: isMobile ? '16px' : '12px 20px',
                                                    cursor: 'pointer',
                                                    backgroundColor: selectedLocation === suburb.value ? '#e5e7eb' : 'transparent',
                                                    borderBottom: '1px solid #f3f4f6',
                                                    transition: 'background-color 0.2s ease',
                                                    display: 'flex',
                                                    justifyContent: 'space-between',
                                                    alignItems: 'center',
                                                    fontSize: isMobile ? '16px' : '16px',
                                                    minHeight: isMobile ? '56px' : 'auto'
                                                }}
                                                onTouchStart={(e) => {
                                                    if (isMobile) e.currentTarget.style.backgroundColor = '#f3f4f6'
                                                }}
                                                onTouchEnd={(e) => {
                                                    if (isMobile && selectedLocation !== suburb.value) {
                                                        e.currentTarget.style.backgroundColor = 'transparent'
                                                    }
                                                }}
                                            >
                                                <span>{suburb.label}</span>
                                                {hasCities(suburb.value) && (
                                                    <span style={{ 
                                                        fontSize: isMobile ? '14px' : '12px', 
                                                        color: '#6b7280' 
                                                    }}>
                                                        {isMobile ? '→' : '→'}
                                                    </span>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {/* Cities Column - Only show when a suburb is clicked */}
                                {clickedSuburb && (
                                    <div style={{
                                        width: isMobile ? '100%' : '280px',
                                        maxHeight: isMobile ? 'calc(100vh - 120px)' : '400px',
                                        overflowY: 'auto',
                                        backgroundColor: isMobile ? 'white' : '#f5f5f5',
                                        flexShrink: 0
                                    }}>
                                        {!isMobile && (
                                            <div style={{
                                                padding: '12px 20px',
                                                fontWeight: '600',
                                                backgroundColor: '#d1d5db',
                                                borderBottom: '1px solid #cbd5e1',
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                                alignItems: 'center',
                                                fontSize: '16px'
                                            }}>
                                                <span>{australianLocations.find(s => s.value === clickedSuburb)?.label}</span>
                                            </div>
                                        )}
                                        {getCitiesForSuburb(clickedSuburb).map((city) => (
                                            <div
                                                key={city.value}
                                                onClick={() => handleLocationSelect(city.value)}
                                                style={{
                                                    padding: isMobile ? '16px' : '12px 20px',
                                                    cursor: 'pointer',
                                                    backgroundColor: selectedLocation === city.value ? '#e5e7eb' : 'transparent',
                                                    borderBottom: '1px solid #f3f4f6',
                                                    transition: 'background-color 0.2s ease',
                                                    fontSize: isMobile ? '16px' : '16px',
                                                    minHeight: isMobile ? '56px' : 'auto',
                                                    display: 'flex',
                                                    alignItems: 'center'
                                                }}
                                                onTouchStart={(e) => {
                                                    if (isMobile) e.currentTarget.style.backgroundColor = '#f3f4f6'
                                                }}
                                                onTouchEnd={(e) => {
                                                    if (isMobile && selectedLocation !== city.value) {
                                                        e.currentTarget.style.backgroundColor = 'transparent'
                                                    }
                                                }}
                                            >
                                                {city.label}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        )}
                    </div>

                    {/* Search Button */}
                    <button
                        type="submit"
                        style={{
                            padding: isMobile ? '16px 24px' : '14px 32px',
                            backgroundColor: '#3b82f6',
                            color: 'white',
                            border: 'none',
                            borderRadius: '10px',
                            fontSize: isMobile ? '16px' : '16px',
                            fontWeight: '600',
                            cursor: 'pointer',
                            boxShadow: '0 4px 12px rgba(59, 130, 246, 0.4)',
                            transition: 'all 0.3s ease',
                            textTransform: 'uppercase',
                            letterSpacing: '0.5px',
                            width: isMobile ? '100%' : 'auto',
                            minHeight: isMobile ? '52px' : 'auto'
                        }}
                        onTouchStart={(e) => {
                            if (isMobile) {
                                e.currentTarget.style.backgroundColor = '#2563eb'
                                e.currentTarget.style.transform = 'scale(0.98)'
                            }
                        }}
                        onTouchEnd={(e) => {
                            if (isMobile) {
                                e.currentTarget.style.backgroundColor = '#3b82f6'
                                e.currentTarget.style.transform = 'scale(1)'
                            }
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