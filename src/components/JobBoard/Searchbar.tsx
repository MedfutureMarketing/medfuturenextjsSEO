// components/JobBoard/Searchbar.tsx
"use client"
import { useState, useRef, useEffect } from 'react'

interface SearchHeaderProps {
    title?: string
}

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
    title = "Permanent Jobs"
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

    // Desktop-specific handlers with radio buttons
    const handleDesktopStateRadioClick = (stateValue: string) => {
        if (!isMobile) {
            setHoveredState(stateValue)
            setClickedSuburb(null)
        }
    }

    const handleDesktopSuburbRadioClick = (suburbValue: string) => {
        if (!isMobile && hasCities(suburbValue)) {
            setClickedSuburb(suburbValue)
        } else {
            handleLocationSelect(suburbValue)
        }
    }

    const handleDesktopStateClick = (stateValue: string) => {
        if (!isMobile) {
            handleLocationSelect(stateValue)
        }
    }

    const handleDesktopSuburbClick = (suburbValue: string) => {
        if (!isMobile && hasCities(suburbValue)) {
            handleSuburbClick(suburbValue)
        } else {
            handleLocationSelect(suburbValue)
        }
    }

    // Mobile-specific handlers (unchanged)
    const handleMobileStateClick = (stateValue: string) => {
        if (isMobile) {
            setHoveredState(hoveredState === stateValue ? null : stateValue)
            setClickedSuburb(null)
        }
    }

    const handleMobileSuburbClick = (suburbValue: string) => {
        if (isMobile && hasCities(suburbValue)) {
            setClickedSuburb(clickedSuburb === suburbValue ? null : suburbValue)
        } else {
            handleLocationSelect(suburbValue)
        }
    }

    // Mobile: Select current level (state or suburb)
    const handleMobileSelectCurrentLevel = () => {
        if (isMobile) {
            if (clickedSuburb) {
                handleLocationSelect(clickedSuburb)
            } else if (hoveredState) {
                handleLocationSelect(hoveredState)
            }
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
        return 'Select Location'
    }

    // Get current selectable location for mobile
    const getMobileCurrentSelectableLocation = () => {
        if (clickedSuburb) {
            return australianLocations.find(loc => loc.value === clickedSuburb)
        }
        if (hoveredState) {
            return australianLocations.find(loc => loc.value === hoveredState)
        }
        return null
    }

    // Calculate dropdown position for desktop - ALWAYS EXPAND LEFT
    const getDropdownPosition = () => {
        if (isMobile) {
            return { left: 0, right: 0 }
        }

        const totalColumns = 1 + (hoveredState ? 1 : 0) + (clickedSuburb ? 1 : 0)
        const dropdownWidth = totalColumns * 280

        if (dropdownRef.current) {
            const rect = dropdownRef.current.getBoundingClientRect()
            const spaceOnLeft = rect.left

            if (dropdownWidth > spaceOnLeft) {
                return { right: 0, left: 'auto' }
            }
        }

        return { right: 0, left: 'auto' }
    }

    // Custom radio button component
    const RadioButton = ({ 
        checked, 
        onChange 
    }: { 
        checked: boolean; 
        onChange: () => void 
    }) => (
        <div
            onClick={(e) => {
                e.stopPropagation()
                onChange()
            }}
            style={{
                width: '18px',
                height: '18px',
                borderRadius: '50%',
                border: '2px solid #64CAF3',
                backgroundColor: checked ? '#64CAF3' : 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                flexShrink: 0,
                marginRight: '12px'
            }}
        >
            {checked && (
                <div style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    backgroundColor: 'white'
                }} />
            )}
        </div>
    )

    return (
        <header style={{
            padding: isMobile ? '0px px' : '0px ',
            borderBottom: '2px solid #ffffffff',
            backgroundColor: '#ffffffff'
        }} className='mt-16'>
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
                    fontSize: isMobile ? '20px' : '48px',
                    fontWeight: '700',
                    color: '#66768F',
                    textAlign: isMobile ? 'left' : 'left',
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
                        placeholder="Search jobs..."
                        style={{
                            padding: isMobile ? '14px 16px' : '14px 20px',
                            border: '2px solid #d1d5db',
                            borderRadius: '10px',
                            width: isMobile ? '100%' : '320px',
                            fontSize: '16px',
                            backgroundColor: 'white',
                            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                            transition: 'all 0.3s ease',
                            outline: 'none',
                            WebkitAppearance: 'none'
                        }}
                        onFocus={(e) => {
                            e.target.style.borderColor = '#64CAF3'
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
                        zIndex: 5
                    }}>
                        {/* Dropdown Trigger */}
                        <div
                            onClick={() => {
                                setIsDropdownOpen(!isDropdownOpen)
                                if (isMobile) {
                                    closeAllMobileDropdowns()
                                } else {
                                    setHoveredState(null)
                                    setClickedSuburb(null)
                                }
                            }}
                            style={{
                                padding: isMobile ? '14px 16px' : '14px 20px',
                                border: '2px solid #d1d5db',
                                borderRadius: '10px',
                                width: isMobile ? '100%' : '280px',
                                fontSize: '16px',
                                backgroundColor: 'white',
                                boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                                transition: 'all 0.3s ease',
                                outline: 'none',
                                cursor: 'pointer',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                minHeight: isMobile ? '52px' : 'auto'
                            }}
                            onMouseEnter={(e) => {
                                if (!isMobile) {
                                    e.currentTarget.style.borderColor = '#64CAF3'
                                }
                            }}
                            onMouseLeave={(e) => {
                                if (!isMobile && !isDropdownOpen) {
                                    e.currentTarget.style.borderColor = '#d1d5db'
                                }
                            }}
                        >
                            <span style={{
                                fontSize: '16px',
                                fontWeight: isMobile ? '500' : 'normal'
                            }}>
                                {getDisplayText()}
                            </span>
                            <span style={{
                                transform: isDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                                transition: 'transform 0.3s ease',
                                fontSize: '12px'
                            }}>
                                ▼
                            </span>
                        </div>

                        {/* Dropdown Menu */}
                        {isDropdownOpen && (
                            <div style={{
                                position: isMobile ? 'fixed' : 'absolute',
                                top: isMobile ? '0' : '100%',
                                ...getDropdownPosition(),
                                backgroundColor: 'white',
                                border: isMobile ? 'none' : '2px solid #d1d5db',
                                borderRadius: isMobile ? '0' : '12px',
                                boxShadow: isMobile ? 'none' : '0 8px 25px rgba(0,0,0,0.15)',
                                zIndex: 5,
                                display: 'flex',
                                flexDirection: isMobile ? 'column' : 'row',
                                minHeight: isMobile ? '100vh' : '300px',
                                maxHeight: isMobile ? '100vh' : '400px',
                                marginTop: isMobile ? '0' : '5px',
                                width: isMobile ? '100vw' : 'auto',
                                overflow: 'hidden'
                            }}>
                                {/* Mobile Header */}
                                {isMobile && (
                                    <div style={{
                                        padding: '5px',
                                        backgroundColor: '#ffffffff',
                                        color: 'white',
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
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

                                {/* Mobile Select Current Level Button */}
                                {isMobile && (hoveredState || clickedSuburb) && (
                                    <div style={{
                                        padding: '16px',
                                        backgroundColor: '#f0f9ff',
                                        borderBottom: '1px solid #e0f2fe',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: '8px'
                                    }}>
                                        <div style={{
                                            fontSize: '14px',
                                            color: '#64CAF3',
                                            fontWeight: '500'
                                        }}>
                                            Select {clickedSuburb ? 'this suburb' : 'this state'}:
                                        </div>
                                        <button
                                            onClick={handleMobileSelectCurrentLevel}
                                            style={{
                                                padding: '12px 16px',
                                                backgroundColor: '#0ea5e9',
                                                color: 'white',
                                                border: 'none',
                                                borderRadius: '8px',
                                                fontSize: '16px',
                                                fontWeight: '600',
                                                cursor: 'pointer',
                                                textAlign: 'center',
                                                width: '100%'
                                            }}
                                            onTouchStart={(e) => {
                                                e.currentTarget.style.backgroundColor = '#0284c7'
                                                e.currentTarget.style.transform = 'scale(0.98)'
                                            }}
                                            onTouchEnd={(e) => {
                                                e.currentTarget.style.backgroundColor = '#0ea5e9'
                                                e.currentTarget.style.transform = 'scale(1)'
                                            }}
                                        >
                                            Select {getMobileCurrentSelectableLocation()?.label}
                                        </button>
                                    </div>
                                )}

                                {/* DESKTOP: All columns visible side-by-side with radio buttons */}
                                {!isMobile && (
                                    <>
                                        {/* States Column - Always visible */}
                                        <div style={{
                                            width: '280px',
                                            borderRight: '1px solid #e5e7eb',
                                            maxHeight: '400px',
                                            overflowY: 'auto',
                                            flexShrink: 0,
                                            order: clickedSuburb ? 1 : 0
                                        }}>
                                            {/* All Locations Option */}
                                            <div
                                                onClick={() => handleLocationSelect('')}
                                                onMouseEnter={() => {
                                                    setHoveredState(null)
                                                    setClickedSuburb(null)
                                                }}
                                                style={{
                                                    padding: '12px 20px',
                                                    cursor: 'pointer',
                                                    backgroundColor: selectedLocation === '' ? '#f3f4f6' : 'white',
                                                    borderBottom: '1px solid #f3f4f6',
                                                    transition: 'background-color 0.2s ease',
                                                    fontSize: '16px',
                                                    display: 'flex',
                                                    alignItems: 'center'
                                                }}
                                                onMouseOver={(e) => {
                                                    e.currentTarget.style.backgroundColor = '#f3f4f6'
                                                }}
                                                onMouseOut={(e) => {
                                                    if (selectedLocation !== '') {
                                                        e.currentTarget.style.backgroundColor = 'white'
                                                    }
                                                }}
                                            >
                                                <RadioButton 
                                                    checked={selectedLocation === ''}
                                                    onChange={() => handleLocationSelect('')}
                                                />
                                                All Locations
                                            </div>

                                            {/* States List */}
                                            {getStates().map((state) => (
                                                <div
                                                    key={state.value}
                                                    onClick={() => handleDesktopStateClick(state.value)}
                                                    onMouseEnter={() => handleDesktopStateRadioClick(state.value)}
                                                    style={{
                                                        padding: '12px 20px',
                                                        cursor: 'pointer',
                                                        backgroundColor: selectedLocation === state.value ? '#f3f4f6' :
                                                            hoveredState === state.value ? '#f3f4f6' : 'white',
                                                        borderBottom: '1px solid #f3f4f6',
                                                        transition: 'background-color 0.2s ease',
                                                        display: 'flex',
                                                        justifyContent: 'space-between',
                                                        alignItems: 'center',
                                                        fontSize: '16px'
                                                    }}
                                                    onMouseOver={(e) => {
                                                        e.currentTarget.style.backgroundColor = '#f3f4f6'
                                                    }}
                                                    onMouseOut={(e) => {
                                                        if (selectedLocation !== state.value && hoveredState !== state.value) {
                                                            e.currentTarget.style.backgroundColor = 'white'
                                                        }
                                                    }}
                                                >
                                                    <div style={{ display: 'flex', alignItems: 'center', flex: 1 }}>
                                                        <RadioButton 
                                                            checked={selectedLocation === state.value}
                                                            onChange={() => handleDesktopStateClick(state.value)}
                                                        />
                                                        <span>{state.label}</span>
                                                    </div>
                                                    <span 
                                                        style={{ 
                                                            fontSize: '12px', 
                                                            color: '#6b7280',
                                                            cursor: 'pointer',
                                                            padding: '4px 8px',
                                                            borderRadius: '4px'
                                                        }}
                                                        onClick={(e) => {
                                                            e.stopPropagation()
                                                            handleDesktopStateRadioClick(state.value)
                                                        }}
                                                        onMouseEnter={(e) => {
                                                            e.currentTarget.style.backgroundColor = '#e5e7eb'
                                                        }}
                                                        onMouseLeave={(e) => {
                                                            e.currentTarget.style.backgroundColor = 'transparent'
                                                        }}
                                                    >
                                                        →
                                                    </span>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Suburbs Column - Show when a state has radio clicked */}
                                        {hoveredState && (
                                            <div style={{
                                                width: '280px',
                                                borderRight: clickedSuburb ? '1px solid #e5e7eb' : 'none',
                                                maxHeight: '400px',
                                                overflowY: 'auto',
                                                backgroundColor: '#fafafa',
                                                flexShrink: 0,
                                                order: clickedSuburb ? 2 : 1
                                            }}>
                                                <div style={{
                                                    padding: '12px 20px',
                                                    fontWeight: '600',
                                                    backgroundColor: '#e5e7eb',
                                                    borderBottom: '1px solid #d1d5db',
                                                    fontSize: '16px',
                                                    display: 'flex',
                                                    alignItems: 'center'
                                                }}>
                                                    <RadioButton 
                                                        checked={selectedLocation === hoveredState}
                                                        onChange={() => handleDesktopStateClick(hoveredState)}
                                                    />
                                                    {getStates().find(s => s.value === hoveredState)?.label}
                                                </div>
                                                {getSuburbsForState(hoveredState).map((suburb) => (
                                                    <div
                                                        key={suburb.value}
                                                        onClick={() => handleDesktopSuburbClick(suburb.value)}
                                                        style={{
                                                            padding: '12px 20px',
                                                            cursor: 'pointer',
                                                            backgroundColor: selectedLocation === suburb.value ? '#e5e7eb' :
                                                                clickedSuburb === suburb.value ? '#e5e7eb' : 'transparent',
                                                            borderBottom: '1px solid #f3f4f6',
                                                            transition: 'background-color 0.2s ease',
                                                            display: 'flex',
                                                            justifyContent: 'space-between',
                                                            alignItems: 'center',
                                                            fontSize: '16px'
                                                        }}
                                                        onMouseEnter={(e) => {
                                                            e.currentTarget.style.backgroundColor = '#f3f4f6'
                                                        }}
                                                        onMouseOut={(e) => {
                                                            if (selectedLocation !== suburb.value && clickedSuburb !== suburb.value) {
                                                                e.currentTarget.style.backgroundColor = 'transparent'
                                                            }
                                                        }}
                                                    >
                                                        <div style={{ display: 'flex', alignItems: 'center', flex: 1 }}>
                                                            <RadioButton 
                                                                checked={selectedLocation === suburb.value}
                                                                onChange={() => handleDesktopSuburbClick(suburb.value)}
                                                            />
                                                            <span>{suburb.label}</span>
                                                        </div>
                                                        {hasCities(suburb.value) && (
                                                            <span 
                                                                style={{ 
                                                                    fontSize: '12px', 
                                                                    color: '#6b7280',
                                                                    cursor: 'pointer',
                                                                    padding: '4px 8px',
                                                                    borderRadius: '4px'
                                                                }}
                                                                onClick={(e) => {
                                                                    e.stopPropagation()
                                                                    handleDesktopSuburbRadioClick(suburb.value)
                                                                }}
                                                                onMouseEnter={(e) => {
                                                                    e.currentTarget.style.backgroundColor = '#e5e7eb'
                                                                }}
                                                                onMouseLeave={(e) => {
                                                                    e.currentTarget.style.backgroundColor = 'transparent'
                                                                }}
                                                            >
                                                                {clickedSuburb === suburb.value ? '←' : '→'}
                                                            </span>
                                                        )}
                                                    </div>
                                                ))}
                                            </div>
                                        )}

                                        {/* Cities Column - Show when a suburb has radio clicked */}
                                        {clickedSuburb && (
                                            <div style={{
                                                width: '280px',
                                                maxHeight: '400px',
                                                overflowY: 'auto',
                                                backgroundColor: '#f5f5f5',
                                                flexShrink: 0,
                                                order: 3
                                            }}>
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
                                                    <div style={{ display: 'flex', alignItems: 'center', flex: 1 }}>
                                                        <RadioButton 
                                                            checked={selectedLocation === clickedSuburb}
                                                            onChange={() => handleDesktopSuburbClick(clickedSuburb)}
                                                        />
                                                        <span>{australianLocations.find(s => s.value === clickedSuburb)?.label}</span>
                                                    </div>
                                                    <span
                                                        style={{
                                                            fontSize: '12px',
                                                            color: '#6b7280',
                                                            cursor: 'pointer',
                                                            padding: '2px 6px',
                                                            borderRadius: '4px'
                                                        }}
                                                        onClick={(e) => {
                                                            e.stopPropagation()
                                                            setClickedSuburb(null)
                                                        }}
                                                        onMouseEnter={(e) => {
                                                            e.currentTarget.style.backgroundColor = '#9ca3af'
                                                        }}
                                                        onMouseLeave={(e) => {
                                                            e.currentTarget.style.backgroundColor = 'transparent'
                                                        }}
                                                    >
                                                        ✕
                                                    </span>
                                                </div>
                                                {getCitiesForSuburb(clickedSuburb).map((city) => (
                                                    <div
                                                        key={city.value}
                                                        onClick={() => handleLocationSelect(city.value)}
                                                        style={{
                                                            padding: '12px 20px',
                                                            cursor: 'pointer',
                                                            backgroundColor: selectedLocation === city.value ? '#e5e7eb' : 'transparent',
                                                            borderBottom: '1px solid #f3f4f6',
                                                            transition: 'background-color 0.2s ease',
                                                            fontSize: '16px',
                                                            display: 'flex',
                                                            alignItems: 'center'
                                                        }}
                                                        onMouseEnter={(e) => {
                                                            e.currentTarget.style.backgroundColor = '#f3f4f6'
                                                        }}
                                                        onMouseOut={(e) => {
                                                            if (selectedLocation !== city.value) {
                                                                e.currentTarget.style.backgroundColor = 'transparent'
                                                            }
                                                        }}
                                                    >
                                                        <RadioButton 
                                                            checked={selectedLocation === city.value}
                                                            onChange={() => handleLocationSelect(city.value)}
                                                        />
                                                        {city.label}
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </>
                                )}

                                {/* MOBILE: Single column at a time (unchanged) */}
                                {isMobile && (
                                    <>
                                        {/* States Column */}
                                        {!hoveredState && (
                                            <div style={{
                                                width: '100%',
                                                maxHeight: clickedSuburb || hoveredState ? 'calc(100vh - 100vh)' : 'calc(100vh - 120px)',
                                                overflowY: 'auto',
                                                flexShrink: 0
                                            }}>
                                                {/* All Locations Option */}
                                                <div
                                                    onClick={() => handleLocationSelect('')}
                                                    style={{
                                                        padding: '16px',
                                                        cursor: 'pointer',
                                                        backgroundColor: selectedLocation === '' ? '#f3f4f6' : 'white',
                                                        borderBottom: '1px solid #f3f4f6',
                                                        transition: 'background-color 0.2s ease',
                                                        fontSize: '16px',
                                                        minHeight: '56px',
                                                        display: 'flex',
                                                        alignItems: 'center'
                                                    }}
                                                    onTouchStart={(e) => {
                                                        e.currentTarget.style.backgroundColor = '#f3f4f6'
                                                    }}
                                                    onTouchEnd={(e) => {
                                                        if (selectedLocation !== '') {
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
                                                        style={{
                                                            padding: '16px',
                                                            cursor: 'pointer',
                                                            backgroundColor: selectedLocation === state.value ? '#f3f4f6' : 'white',
                                                            borderBottom: '1px solid #f3f4f6',
                                                            transition: 'background-color 0.2s ease',
                                                            display: 'flex',
                                                            justifyContent: 'space-between',
                                                            alignItems: 'center',
                                                            fontSize: '16px',
                                                            minHeight: '56px'
                                                        }}
                                                        onTouchStart={(e) => {
                                                            e.currentTarget.style.backgroundColor = '#f3f4f6'
                                                        }}
                                                        onTouchEnd={(e) => {
                                                            if (selectedLocation !== state.value) {
                                                                e.currentTarget.style.backgroundColor = 'white'
                                                            }
                                                        }}
                                                    >
                                                        <span>{state.label}</span>
                                                        <span style={{ fontSize: '14px', color: '#6b7280' }}>→</span>
                                                    </div>
                                                ))}
                                            </div>
                                        )}

                                        {/* Suburbs Column */}
                                        {hoveredState && !clickedSuburb && (
                                            <div style={{
                                                width: '100%',
                                                maxHeight: 'calc(100vh - 200px)',
                                                overflowY: 'auto',
                                                backgroundColor: 'white',
                                                flexShrink: 0
                                            }}>
                                                {getSuburbsForState(hoveredState).map((suburb) => (
                                                    <div
                                                        key={suburb.value}
                                                        onClick={() => handleMobileSuburbClick(suburb.value)}
                                                        style={{
                                                            padding: '16px',
                                                            cursor: 'pointer',
                                                            backgroundColor: selectedLocation === suburb.value ? '#e5e7eb' : 'transparent',
                                                            borderBottom: '1px solid #f3f4f6',
                                                            transition: 'background-color 0.2s ease',
                                                            display: 'flex',
                                                            justifyContent: 'space-between',
                                                            alignItems: 'center',
                                                            fontSize: '16px',
                                                            minHeight: '56px'
                                                        }}
                                                        onTouchStart={(e) => {
                                                            e.currentTarget.style.backgroundColor = '#f3f4f6'
                                                        }}
                                                        onTouchEnd={(e) => {
                                                            if (selectedLocation !== suburb.value) {
                                                                e.currentTarget.style.backgroundColor = 'transparent'
                                                            }
                                                        }}
                                                    >
                                                        <span>{suburb.label}</span>
                                                        {hasCities(suburb.value) && (
                                                            <span style={{ fontSize: '14px', color: '#6b7280' }}>→</span>
                                                        )}
                                                    </div>
                                                ))}
                                            </div>
                                        )}

                                        {/* Cities Column */}
                                        {clickedSuburb && (
                                            <div style={{
                                                width: '100%',
                                                maxHeight: 'calc(100vh - 200px)',
                                                overflowY: 'auto',
                                                backgroundColor: 'white',
                                                flexShrink: 0
                                            }}>
                                                {getCitiesForSuburb(clickedSuburb).map((city) => (
                                                    <div
                                                        key={city.value}
                                                        onClick={() => handleLocationSelect(city.value)}
                                                        style={{
                                                            padding: '16px',
                                                            cursor: 'pointer',
                                                            backgroundColor: selectedLocation === city.value ? '#e5e7eb' : 'transparent',
                                                            borderBottom: '1px solid #f3f4f6',
                                                            transition: 'background-color 0.2s ease',
                                                            fontSize: '16px',
                                                            minHeight: '56px',
                                                            display: 'flex',
                                                            alignItems: 'center'
                                                        }}
                                                        onTouchStart={(e) => {
                                                            e.currentTarget.style.backgroundColor = '#f3f4f6'
                                                        }}
                                                        onTouchEnd={(e) => {
                                                            if (selectedLocation !== city.value) {
                                                                e.currentTarget.style.backgroundColor = 'transparent'
                                                            }
                                                        }}
                                                    >
                                                        {city.label}
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </>
                                )}
                            </div>
                        )}
                    </div>

                    {/* Search Button */}
                    <button
                        type="submit"
                        style={{
                            padding: isMobile ? '16px 24px' : '16px ',
                            backgroundColor: '#64CAF3',
                            color: 'white',
                            border: 'none',
                            borderRadius: '10px',
                            fontSize: '18px',
                            fontWeight: '400',
                            cursor: 'pointer',
                            boxShadow: '0 4px 12px rgba(59, 130, 246, 0.4)',
                            transition: 'all 0.3s ease',
                            letterSpacing: '0.5px',
                            width: isMobile ? '100%' : '122px',
                            minHeight: isMobile ? '52px' : 'auto',
                            textAlign: 'center'
                        }}
                        onMouseOver={(e) => {
                            if (!isMobile) {
                                e.currentTarget.style.backgroundColor = '#64CAF3'
                                e.currentTarget.style.boxShadow = '0 6px 20px rgba(59, 130, 246, 0.6)'
                                e.currentTarget.style.transform = 'translateY(-2px)'
                            }
                        }}
                        onMouseOut={(e) => {
                            if (!isMobile) {
                                e.currentTarget.style.backgroundColor = '#64CAF3'
                                e.currentTarget.style.boxShadow = '0 4px 12px rgba(59, 130, 246, 0.4)'
                                e.currentTarget.style.transform = 'translateY(0)'
                            }
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