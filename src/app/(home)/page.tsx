import Link from 'next/link';
import { BookOpenIcon, MessageCircleIcon, CodeIcon, ZapIcon, UsersIcon, ShoppingCartIcon, LayersIcon, ArrowRightIcon } from 'lucide-react';
import { Cards, Card } from 'fumadocs-ui/components/card';

export default function HomePage() {
  return (
    <div className="flex flex-col flex-1">
      <section className="relative flex flex-col justify-center text-center flex-1 py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[oklch(0.55_0.20_250/0.15)] dark:bg-[oklch(0.70_0.16_270/0.10)] blur-[120px] rounded-full" />
        </div>
        
        <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
          <span className="bg-gradient-to-b from-fd-foreground to-fd-muted-foreground bg-clip-text text-transparent">
          <span className="text-fd-primary">Briefly</span> CRM Docs
          </span>
          <br />
          
        </h1>
        
        <p className="text-lg md:text-xl text-fd-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
          Everything you need to integrate and work with our E-Commerce CRM API.
        </p>
        
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/docs/getting-started"
            className="group inline-flex items-center gap-2 px-6 py-3 bg-fd-primary text-fd-primary-foreground rounded-lg font-medium hover:opacity-90 transition-all hover:gap-3"
          >
            Get Started
            <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="/docs/api"
            className="inline-flex items-center gap-2 px-6 py-3 border border-fd-border rounded-lg font-medium hover:bg-fd-secondary/50 transition-colors"
          >
            API Reference
          </Link>
        </div>
      </section>

      <section className="py-20 px-4 border-t bg-fd-secondary/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-10">Features</h2>
          <Cards>
            <Card
              icon={<BookOpenIcon className="size-5" />}
              title="Comprehensive Guides"
              description="Step-by-step tutorials to help you get started quickly"
              href="/docs/getting-started"
            />
            <Card
              icon={<CodeIcon className="size-5" />}
              title="API Reference"
              description="Interactive documentation for all API endpoints"
              href="/docs/api"
            />
            <Card
              icon={<MessageCircleIcon className="size-5" />}
              title="AI Assistant"
              description="Get instant answers with our AI-powered search"
            />
            <Card
              icon={<ZapIcon className="size-5" />}
              title="Quick Integration"
              description="Connect your Shopify store in minutes"
            />
          </Cards>
        </div>
      </section>

      <section className="py-20 px-4 border-t">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-10">API Categories</h2>
          <Cards>
            <Card
              icon={<UsersIcon className="size-5" />}
              title="Customers"
              description="Manage customers, notes, events, and RFM analytics"
              href="/docs/api/listCustomers"
            />
            <Card
              icon={<LayersIcon className="size-5" />}
              title="Products"
              description="Product catalog management and inventory"
              href="/docs/api/listProducts"
            />
            <Card
              icon={<ShoppingCartIcon className="size-5" />}
              title="Orders"
              description="Order processing, fulfillment, and tracking"
              href="/docs/api/listOrders"
            />
            <Card
              icon={<CodeIcon className="size-5" />}
              title="Integrations"
              description="Shopify sync, webhooks, and data imports"
              href="/docs/api/listIntegrations"
            />
          </Cards>
        </div>
      </section>
    </div>
  );
}
