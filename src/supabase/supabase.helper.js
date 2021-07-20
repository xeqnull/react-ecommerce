import { createClient } from '@supabase/supabase-js';


const SUPABASE_URL = 'https://uziqorobwtapkqvyhrqq.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYyNjc2MDM5OSwiZXhwIjoxOTQyMzM2Mzk5fQ.YR5q4IuyBmAZ1dwwYb27YVzNIYrNbrEf4vLouKxG0RI';

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

export const signIn = async ({email, password}) => {
    const { user, session, error } = await supabase.auth.signIn({
        email: email,
        password: password,
      });
}

export const signUp = async ({email, password}) => {
    const { user, session, error } = await supabase.auth.signUp({
        email: email,
        password: password,
      });
}

export const signOut = async() => {
    const { error } = await supabase.auth.signOut();
}

// can modify to accept provider
export const signInWithGoogle = async() =>  {
    const { user, session, error } = await supabase.auth.signIn({
        provider: 'google'
    });
}
