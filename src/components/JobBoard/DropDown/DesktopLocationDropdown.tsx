// components/JobBoard/DesktopLocationDropdown.tsx
import { useState } from 'react'

interface DesktopLocationDropdownProps {
  isOpen: boolean
  selectedLocation: string
  onLocationSelect: (value: string) => void
  locations: any[]
  screenSize: 'tablet' | 'desktop'
}

const DesktopLocationDropdown = ({
  isOpen,
  selectedLocation,
  onLocationSelect,
  locations,
  screenSize
}: DesktopLocationDropdownProps) => {
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

  const getColumnWidth = () => screenSize === 'tablet' ? '240px' : '280px'

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
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      minHeight: '300px',
      maxHeight: '400px',
      backgroundColor: 'white',
      border: '2px solid #d1d5db',
      borderRadius: '12px',
      boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
      overflow: 'hidden'
    }}>
      {/* States Column */}
      <div style={{
        width: getColumnWidth(),
        borderRight: '1px solid #e5e7eb',
        maxHeight: '400px',
        overflowY: 'auto',
        flexShrink: 0
      }}>
        <div
          onClick={() => onLocationSelect('')}
          onMouseEnter={() => {
            setHoveredState(null)
            setClickedSuburb(null)
          }}
          style={{
            padding: '12px 20px',
            cursor: 'pointer',
            backgroundColor: selectedLocation === '' ? '#f3f4f6' : 'white',
            borderBottom: '1px solid #f3f4f6',
            fontSize: '16px',
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <RadioButton 
            checked={selectedLocation === ''}
            onChange={() => onLocationSelect('')}
          />
          All Locations
        </div>

        {getStates().map((state) => (
          <div
            key={state.value}
            onClick={() => onLocationSelect(state.value)}
            onMouseEnter={() => setHoveredState(state.value)}
            style={{
              padding: '12px 20px',
              cursor: 'pointer',
              backgroundColor: selectedLocation === state.value ? '#f3f4f6' :
                hoveredState === state.value ? '#f3f4f6' : 'white',
              borderBottom: '1px solid #f3f4f6',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              fontSize: '16px'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', flex: 1 }}>
              <RadioButton 
                checked={selectedLocation === state.value}
                onChange={() => onLocationSelect(state.value)}
              />
              <span>{state.label}</span>
            </div>
            <span style={{ 
              fontSize: '12px', 
              color: '#6b7280',
              padding: '4px 8px',
              borderRadius: '4px'
            }}>
              →
            </span>
          </div>
        ))}
      </div>

      {/* Suburbs Column */}
      {hoveredState && (
        <div style={{
          width: getColumnWidth(),
          borderRight: clickedSuburb ? '1px solid #e5e7eb' : 'none',
          maxHeight: '400px',
          overflowY: 'auto',
          backgroundColor: '#fafafa',
          flexShrink: 0
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
              onChange={() => onLocationSelect(hoveredState)}
            />
            {locations.find(s => s.value === hoveredState)?.label}
          </div>
          {getSuburbsForState(hoveredState).map((suburb) => (
            <div
              key={suburb.value}
              onClick={() => {
                if (hasCities(suburb.value)) {
                  setClickedSuburb(suburb.value)
                } else {
                  onLocationSelect(suburb.value)
                }
              }}
              style={{
                padding: '12px 20px',
                cursor: 'pointer',
                backgroundColor: selectedLocation === suburb.value ? '#e5e7eb' :
                  clickedSuburb === suburb.value ? '#e5e7eb' : 'transparent',
                borderBottom: '1px solid #f3f4f6',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                fontSize: '16px'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', flex: 1 }}>
                <RadioButton 
                  checked={selectedLocation === suburb.value}
                  onChange={() => {
                    if (hasCities(suburb.value)) {
                      setClickedSuburb(suburb.value)
                    } else {
                      onLocationSelect(suburb.value)
                    }
                  }}
                />
                <span>{suburb.label}</span>
              </div>
              {hasCities(suburb.value) && (
                <span style={{ 
                  fontSize: '12px', 
                  color: '#6b7280',
                  padding: '4px 8px',
                  borderRadius: '4px'
                }}>
                  →
                </span>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Cities Column */}
      {clickedSuburb && (
        <div style={{
          width: getColumnWidth(),
          maxHeight: '400px',
          overflowY: 'auto',
          backgroundColor: '#f5f5f5',
          flexShrink: 0
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
                onChange={() => onLocationSelect(clickedSuburb)}
              />
              <span>{locations.find(s => s.value === clickedSuburb)?.label}</span>
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
            >
              ✕
            </span>
          </div>
          {getCitiesForSuburb(clickedSuburb).map((city) => (
            <div
              key={city.value}
              onClick={() => onLocationSelect(city.value)}
              style={{
                padding: '12px 20px',
                cursor: 'pointer',
                backgroundColor: selectedLocation === city.value ? '#e5e7eb' : 'transparent',
                borderBottom: '1px solid #f3f4f6',
                fontSize: '16px',
                display: 'flex',
                alignItems: 'center'
              }}
            >
              <RadioButton 
                checked={selectedLocation === city.value}
                onChange={() => onLocationSelect(city.value)}
              />
              {city.label}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default DesktopLocationDropdown