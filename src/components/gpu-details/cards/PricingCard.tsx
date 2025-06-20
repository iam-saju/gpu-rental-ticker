
import SupabaseGpuCard from "../SupabaseGpuCard";
import { DollarSign } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface PricingCardProps {
  pricing: any;
}

const PricingCard = ({ pricing }: PricingCardProps) => {
  const content = (
    <div className="space-y-3">
      <div className="flex justify-between items-center py-2 border-b border-border">
        <span className="text-sm font-medium text-foreground">Hourly Rate</span>
        <span className="font-bold text-lg text-foreground">${pricing?.hourly?.toFixed(3) || '0.000'}</span>
      </div>
      <div className="flex justify-between items-center py-1">
        <span className="text-sm text-muted-foreground">Daily (~24h)</span>
        <span className="font-medium text-foreground">${Math.round((pricing?.hourly || 0) * 24)}</span>
      </div>
      <div className="flex justify-between items-center py-1">
        <span className="text-sm text-muted-foreground">Weekly (~168h)</span>
        <span className="font-medium text-foreground">${Math.round((pricing?.hourly || 0) * 168)}</span>
      </div>
      {pricing?.spot && (
        <div className="pt-2 border-t border-border">
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">Spot Pricing</span>
            <Badge variant="secondary" className="text-primary">
              ${pricing.spot.toFixed(3)}/hr
            </Badge>
          </div>
        </div>
      )}
    </div>
  );

  return (
    <SupabaseGpuCard
      title="Pricing & Billing"
      description="Transparent pricing with no hidden fees"
      icon={DollarSign}
      content={content}
      action="Calculate Costs"
    />
  );
};

export default PricingCard;
