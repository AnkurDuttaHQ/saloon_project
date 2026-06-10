import React from 'react';
import * as Lucide from 'lucide-react';

interface SalonIconProps {
  name: string;
  className?: string;
  size?: number;
  key?: any;
}

export default function SalonIcon({ name, className = '', size = 24 }: SalonIconProps) {
  // Map our dynamic names to actual lucide components
  const iconMap: { [key: string]: React.ComponentType<any> } = {
    'Scissors': Lucide.Scissors,
    'Wind': Lucide.Wind,
    'Sparkles': Lucide.Sparkles,
    'Sparkle': Lucide.Sparkles, // Use sparkles as sibling
    'Palette': Lucide.Palette,
    'Crown': Lucide.Crown,
    'Music': Lucide.Music,
    'HeartPulse': Lucide.HeartPulse,
    'Droplet': Lucide.Droplet,
    'UserCheck': Lucide.UserCheck,
    'Hand': Lucide.Hand,
    'Footprints': Lucide.Footprints,
    'Paintbrush': Lucide.Paintbrush,
    'Briefcase': Lucide.Briefcase,
    'Award': Lucide.Award,
    'Gem': Lucide.Gem,
    'ShieldCheck': Lucide.Shield,
    'IndianRupee': Lucide.Coins, // Beautiful coin replacement or Indian rupee icon
    'Smile': Lucide.Smile,
    'Heart': Lucide.Heart,
    'MapPin': Lucide.MapPin,
    'Phone': Lucide.Phone,
    'Mail': Lucide.Mail,
    'Clock': Lucide.Clock,
    'Star': Lucide.Star,
    'Check': Lucide.Check,
    'ChevronLeft': Lucide.ChevronLeft,
    'ChevronRight': Lucide.ChevronRight,
    'Send': Lucide.Send,
    'Calendar': Lucide.Calendar,
    'User': Lucide.User,
    'MessageSquare': Lucide.MessageSquare,
    'Menu': Lucide.Menu,
    'X': Lucide.X,
    'ArrowRight': Lucide.ArrowRight,
    'Flame': Lucide.Flame
  };

  const IconComponent = iconMap[name] || Lucide.Sparkles;
  return <IconComponent className={className} size={size} />;
}
