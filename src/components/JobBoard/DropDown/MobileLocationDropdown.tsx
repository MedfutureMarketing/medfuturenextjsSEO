// components/JobBoard/MobileLocationDropdown.tsx
import { useState } from 'react'

interface MobileLocationDropdownProps {
  isOpen: boolean
  onClose: () => void
  selectedLocation: string
  onLocationSelect: (value: string) => void
  locations: any[]
}

const MobileLocationDropdown = ({
  isOpen,
  onClose,
  selectedLocation,
  onLocationSelect,
  locations
}: MobileLocationDropdownProps) => {
  const [hoveredState, setHoveredState] = useState<string | null>(null)
  const [clickedSuburb, setClickedSuburb] = useState<string | null>(null)

  if (!isOpen) return null

  const getStates = () => {
    return locations.filter(loc => loc.type === 'state' && loc.value !== '')
  }

  const getSuburbsForState = (stateValue: string) => {
    return locations.filter(loc => loc.type === 'suburb' && loc.parent === stateValue)
  }

  const getCitiesForSuburb = (suburbValue: string) => {
    return locations.filter(loc => loc.type === 'city' && loc.parent === suburbValue)
  }

  const hasCities = (suburbValue: string) => {
    return getCitiesForSuburb(suburbValue).length > 0
  }

  const handleStateClick = (stateValue: string) => {
    setHoveredState(stateValue)
    setClickedSuburb(null)
  }

  const handleSuburbClick = (suburbValue: string) => {
    if (hasCities(suburbValue)) {
      setClickedSuburb(suburbValue)
    } else {
      onLocationSelect(suburbValue)
    }
  }

  const handleSelectCurrentLevel = () => {
    if (clickedSuburb) {
      onLocationSelect(clickedSuburb)
    } else if (hoveredState) {
      onLocationSelect(hoveredState)
    }
  }

  const getBreadcrumb = () => {
    if (clickedSuburb) {
      const suburb = locations.find(loc => loc.value === clickedSuburb)
      return suburb?.label || 'Cities'
    }
    if (hoveredState) {
      const state = locations.find(loc => loc.value === hoveredState)
      return state?.label || 'Suburbs'
    }
    return 'Select Location'
  }

  const getCurrentSelectableLocation = () => {
    if (clickedSuburb) {
      return locations.find(loc => loc.value === clickedSuburb)
    }
    if (hoveredState) {
      return locations.find(loc => loc.value === hoveredState)
    }
    return null
  }

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'white',
      zIndex: 1000,
      display: 'flex',
      flexDirection: 'column'
    }}>
      {/* Header */}
      <div style={{
        padding: '16px',
        backgroundColor: '#64CAF3',
        color: 'white',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <span style={{ fontSize: '18px', fontWeight: '600' }}>
          {getBreadcrumb()}
        </span>
        <button
          onClick={onClose}
          style={{
            background: 'none',
            border: 'none',
            color: 'white',
            fontSize: '20px',
            cursor: 'pointer',
            padding: '4px 8px',
            borderRadius: '4px'
          }}
        >
          ✕
        </button>
      </div>

      {/* Back Button */}
      {(hoveredState || clickedSuburb) && (
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
        >
          <span style={{ fontSize: '18px' }}>←</span>
          Back
        </div>
      )}

      {/* Select Current Level Button */}
      {(hoveredState || clickedSuburb) && (
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
            onClick={handleSelectCurrentLevel}
            style={{
              padding: '12px 16px',
              backgroundColor: '#64CAF3',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontSize: '16px',
              fontWeight: '600',
              cursor: 'pointer',
              textAlign: 'center',
              width: '100%'
            }}
          >
            Select {getCurrentSelectableLocation()?.label}
          </button>
        </div>
      )}

      {/* Content */}
      <div style={{ flex: 1, overflow: 'auto' }}>
        {/* States Column */}
        {!hoveredState && !clickedSuburb && (
          <div>
            <div
              onClick={() => onLocationSelect('')}
              style={{
                padding: '16px',
                cursor: 'pointer',
                backgroundColor: selectedLocation === '' ? '#f3f4f6' : 'white',
                borderBottom: '1px solid #f3f4f6',
                fontSize: '16px',
                minHeight: '56px',
                display: 'flex',
                alignItems: 'center'
              }}
            >
              All Locations
            </div>
            {getStates().map((state) => (
              <div
                key={state.value}
                onClick={() => handleStateClick(state.value)}
                style={{
                  padding: '16px',
                  cursor: 'pointer',
                  backgroundColor: selectedLocation === state.value ? '#f3f4f6' : 'white',
                  borderBottom: '1px solid #f3f4f6',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  fontSize: '16px',
                  minHeight: '56px'
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
          <div>
            {getSuburbsForState(hoveredState).map((suburb) => (
              <div
                key={suburb.value}
                onClick={() => handleSuburbClick(suburb.value)}
                style={{
                  padding: '16px',
                  cursor: 'pointer',
                  backgroundColor: selectedLocation === suburb.value ? '#e5e7eb' : 'white',
                  borderBottom: '1px solid #f3f4f6',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  fontSize: '16px',
                  minHeight: '56px'
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
          <div>
            {getCitiesForSuburb(clickedSuburb).map((city) => (
              <div
                key={city.value}
                onClick={() => onLocationSelect(city.value)}
                style={{
                  padding: '16px',
                  cursor: 'pointer',
                  backgroundColor: selectedLocation === city.value ? '#e5e7eb' : 'white',
                  borderBottom: '1px solid #f3f4f6',
                  fontSize: '16px',
                  minHeight: '56px',
                  display: 'flex',
                  alignItems: 'center'
                }}
              >
                {city.label}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default MobileLocationDropdown