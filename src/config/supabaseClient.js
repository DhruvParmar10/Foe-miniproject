import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://oalncpmnrehvgswerkri.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9hbG5jcG1ucmVodmdzd2Vya3JpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzg3OTMxMzcsImV4cCI6MTk5NDM2OTEzN30.7AjSpmxPkatK0rt6xwMQac0fCjFRxvMcuCDpf9MP9R0"
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase