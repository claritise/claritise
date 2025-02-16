ALTER TABLE "claritise_post" ADD COLUMN "created_by" varchar(255) NOT NULL;--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "claritise_post" ADD CONSTRAINT "claritise_post_created_by_claritise_user_id_fk" FOREIGN KEY ("created_by") REFERENCES "public"."claritise_user"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "created_by_idx" ON "claritise_post" USING btree ("created_by");