/**
 * Format a number as currency
 */
export const formatCurrency = (value: number): string => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: value < 1 ? 4 : 2,
      maximumFractionDigits: value < 1 ? 8 : 2,
    }).format(value);
  };
  
  /**
   * Format a large number with abbreviations (K, M, B, T)
   */
  export const formatLargeNumber = (value: number | string): string => {
    const num = typeof value === 'string' ? parseFloat(value) : value;
  
    if (isNaN(num)) return '$0.00';
  
    if (num >= 1e12) return `$${(num / 1e12).toFixed(2)}T`;
    if (num >= 1e9) return `$${(num / 1e9).toFixed(2)}B`;
    if (num >= 1e6) return `$${(num / 1e6).toFixed(2)}M`;
    if (num >= 1e3) return `$${(num / 1e3).toFixed(2)}K`;
  
    return `$${num.toFixed(2)}`;
  };
  
  
  /**
   * Format a percentage value
   */
  export const formatPercentage = (value: number): string => {
    return `${value.toFixed(2)}%`;
  };