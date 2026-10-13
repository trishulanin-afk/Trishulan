import { createClient } from "@supabase/supabase-js";

export type CustomerReview = {
  id: string;
  created_at: string;
  customer_name: string;
  company_name: string | null;
  rating: number;
  feedback: string;
  status: "pending" | "approved" | "rejected";
};

type Database = {
  public: {
    Tables: {
      customer_reviews: {
        Row: CustomerReview;
        Insert: {
          id?: string;
          created_at?: string;
          customer_name: string;
          company_name?: string | null;
          rating: number;
          feedback: string;
          status?: CustomerReview["status"];
        };
        Update: {
          id?: string;
          created_at?: string;
          customer_name?: string;
          company_name?: string | null;
          rating?: number;
          feedback?: string;
          status?: CustomerReview["status"];
        };
        Relationships: [];
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
    CompositeTypes: Record<string, never>;
  };
};

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey =
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ??
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const supabase =
  supabaseUrl && supabaseKey
    ? createClient<Database>(supabaseUrl, supabaseKey)
    : null;
