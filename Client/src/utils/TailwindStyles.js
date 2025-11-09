// Bootstrap to Tailwind Utility Component
// This helps during the migration phase by providing consistent styling

export const ButtonStyles = {
  // Primary button styles
  primary: "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors duration-200",
  success: "bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition-colors duration-200", 
  danger: "bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition-colors duration-200",
  warning: "bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded transition-colors duration-200",
  info: "bg-cyan-500 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded transition-colors duration-200",
  light: "bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold py-2 px-4 rounded transition-colors duration-200",
  dark: "bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded transition-colors duration-200",
  
  // Size variants
  sm: "py-1 px-2 text-sm",
  lg: "py-3 px-6 text-lg"
};

export const CardStyles = {
  base: "bg-white rounded-lg shadow-md border border-gray-200 dark:bg-gray-800 dark:border-gray-700",
  header: "px-6 py-4 border-b border-gray-200 dark:border-gray-700",
  body: "p-6",
  footer: "px-6 py-4 border-t border-gray-200 dark:border-gray-700"
};

export const FormStyles = {
  control: "block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white",
  label: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",
  select: "block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
};

export const LayoutStyles = {
  container: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
  containerFluid: "w-full px-4",
  flex: "flex",
  flexCol: "flex flex-col",
  flexCenter: "flex items-center justify-center",
  flexBetween: "flex items-center justify-between",
  hidden: "hidden",
  block: "block",
  grid: "grid",
  
  // Responsive utilities
  mdHidden: "md:hidden",
  mdBlock: "md:block",
  mdFlex: "md:flex"
};

export const TextStyles = {
  center: "text-center",
  left: "text-left", 
  right: "text-right",
  primary: "text-blue-600",
  success: "text-green-600",
  danger: "text-red-600",
  warning: "text-yellow-600",
  info: "text-cyan-600",
  muted: "text-gray-500",
  white: "text-white",
  dark: "text-gray-900"
};

// Usage example:
// <button className={ButtonStyles.success}>Save</button>
// <div className={CardStyles.base}>
//   <div className={CardStyles.header}>Header</div>
//   <div className={CardStyles.body}>Body</div>
// </div>