"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface AnimatedCardProps {
  title: string;
  description: string;
  icon: string;
  delay?: number;
}

export function AnimatedCard({ title, description, icon, delay = 0 }: AnimatedCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <Card className="h-full cursor-pointer">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <span className="text-2xl">{icon}</span>
            {title}
          </CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <motion.div
            className="h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1, delay: delay + 0.3 }}
          />
        </CardContent>
      </Card>
    </motion.div>
  );
}
