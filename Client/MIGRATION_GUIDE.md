# Bootstrap to Tailwind CSS Migration Guide for X-Pense

## Common Class Mappings

### Buttons
| Bootstrap | Tailwind |
|-----------|----------|
| `btn` | `inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md` |
| `btn-primary` | `bg-blue-500 hover:bg-blue-700 text-white` |
| `btn-success` | `bg-green-500 hover:bg-green-700 text-white` |
| `btn-danger` | `bg-red-500 hover:bg-red-700 text-white` |
| `btn-warning` | `bg-yellow-500 hover:bg-yellow-700 text-white` |
| `btn-info` | `bg-cyan-500 hover:bg-cyan-700 text-white` |
| `btn-light` | `bg-gray-100 hover:bg-gray-200 text-gray-800` |
| `btn-dark` | `bg-gray-800 hover:bg-gray-900 text-white` |
| `btn-sm` | `px-3 py-1.5 text-xs` |
| `btn-lg` | `px-6 py-3 text-lg` |

### Layout & Flexbox
| Bootstrap | Tailwind |
|-----------|----------|
| `container` | `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8` |
| `container-fluid` | `w-full px-4` |
| `row` | `flex flex-wrap -mx-4` |
| `col` | `flex-1 px-4` |
| `col-6` | `w-1/2 px-4` |
| `col-md-4` | `md:w-1/3 px-4` |
| `d-flex` | `flex` |
| `d-block` | `block` |
| `d-none` | `hidden` |
| `d-md-none` | `md:hidden` |
| `d-md-block` | `md:block` |
| `justify-content-center` | `justify-center` |
| `justify-content-between` | `justify-between` |
| `align-items-center` | `items-center` |
| `flex-column` | `flex-col` |

### Spacing
| Bootstrap | Tailwind |
|-----------|----------|
| `p-0` to `p-5` | `p-0` to `p-5` (same) |
| `m-0` to `m-5` | `m-0` to `m-5` (same) |
| `mb-2` | `mb-2` (same) |
| `mt-4` | `mt-4` (same) |
| `me-2` | `mr-2` |
| `ms-3` | `ml-3` |

### Text & Colors
| Bootstrap | Tailwind |
|-----------|----------|
| `text-center` | `text-center` |
| `text-left` | `text-left` |
| `text-right` | `text-right` |
| `text-primary` | `text-blue-600` |
| `text-success` | `text-green-600` |
| `text-danger` | `text-red-600` |
| `text-warning` | `text-yellow-600` |
| `text-muted` | `text-gray-500` |
| `bg-primary` | `bg-blue-600` |
| `bg-success` | `bg-green-600` |
| `bg-danger` | `bg-red-600` |

### Forms
| Bootstrap | Tailwind |
|-----------|----------|
| `form-control` | `block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500` |
| `form-label` | `block text-sm font-medium text-gray-700 mb-2` |
| `form-select` | `block w-full px-3 py-2 border border-gray-300 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500` |

### Cards
| Bootstrap | Tailwind |
|-----------|----------|
| `card` | `bg-white rounded-lg shadow-md border border-gray-200` |
| `card-header` | `px-6 py-4 border-b border-gray-200` |
| `card-body` | `p-6` |
| `card-footer` | `px-6 py-4 border-t border-gray-200` |

### Tables
| Bootstrap | Tailwind |
|-----------|----------|
| `table` | `w-full text-sm text-left text-gray-500` |
| `table-dark` | `bg-gray-800 text-white` |
| `table-striped` | `odd:bg-gray-50` |
| `table-hover` | `hover:bg-gray-50` |

### Badges
| Bootstrap | Tailwind |
|-----------|----------|
| `badge` | `inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium` |
| `badge-primary` | `bg-blue-100 text-blue-800` |
| `badge-success` | `bg-green-100 text-green-800` |
| `badge-danger` | `bg-red-100 text-red-800` |

### Navigation
| Bootstrap | Tailwind |
|-----------|----------|
| `navbar` | `flex items-center justify-between p-4` |
| `nav` | `flex flex-wrap` |
| `nav-link` | `block px-3 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-md` |
| `nav-link.active` | `bg-blue-600 text-white hover:bg-blue-700` |

## Migration Strategy by Component

### 1. StartPage.jsx (Easy - Start Here)
```jsx
// Before (Bootstrap)
<button className="btn btn-success fade-in">Get Started</button>

// After (Tailwind)
<button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition-colors duration-200 animate-fade-in">
  Get Started
</button>
```

### 2. App.jsx Navigation (Medium complexity)
```jsx
// Before (Bootstrap)
<div className="d-flex flex-column p-3">
  <button className="btn btn-sm btn-light">Toggle</button>
</div>

// After (Tailwind)
<div className="flex flex-col p-3">
  <button className="px-3 py-1.5 text-xs bg-gray-100 hover:bg-gray-200 text-gray-800 rounded">
    Toggle
  </button>
</div>
```

### 3. Dark Mode Classes
```jsx
// Update your dark mode logic to use Tailwind classes
const darkModeClasses = darkMode 
  ? "bg-gray-900 text-white" 
  : "bg-white text-gray-900";
```

## Component Migration Priority

1. ✅ **StartPage** (Simple button and layout)
2. **Footer** (Simple text styling)
3. **Navigation links** in App.jsx
4. **Form components** (AddTransactions, etc.)
5. **Card layouts** in Dashboard
6. **Tables** in Transactions, Balance
7. **Complex modals and dropdowns** (Last)

## Testing Strategy

1. **Start with one component at a time**
2. **Keep both Bootstrap and Tailwind during transition**
3. **Test in both light and dark mode**
4. **Verify responsive behavior**
5. **Check all interactive states (hover, focus, active)**

## Benefits You'll Gain

### Performance
- **Smaller bundle size** (no Bootstrap JS dependencies)
- **Purged unused CSS** (only classes you use)
- **Faster load times**

### Developer Experience  
- **Better IntelliSense** with Tailwind CSS extension
- **Consistent design system**
- **Easier responsive design** with built-in breakpoints
- **No CSS conflicts** between components

### Maintainability
- **Utility-first approach** - styles in components
- **Easy theming** with CSS custom properties
- **Better dark mode support**
- **Predictable styling** - no cascade issues

## Recommended Next Steps

1. **Start with StartPage.jsx** - replace the Bootstrap button
2. **Update one navigation element** in App.jsx
3. **Create a component migration checklist**
4. **Test thoroughly in different screen sizes**
5. **Gradually remove Bootstrap when 80% migrated**

This approach ensures zero downtime and maintains all existing functionality while gradually modernizing your styling approach.