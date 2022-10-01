import java.util.*;
 
public class Main {
 
	public static void main(String[] args) {
		
		Scanner sc = new Scanner(System.in);
		int t = sc.nextInt();
		while(t-->0)
		{
			int a = sc.nextInt();
			int b = sc.nextInt();
			int c = sc.nextInt();
			int d = sc.nextInt();
			if(b<a && c<=d)
			{
				System.out.println(-1);
			}
			else
			{
				double rem = a-b;
				long req = b;
				if(rem>0)
				{
					double st = c-d;
					
					long div = (int)Math.ceil(rem/st);
					req+=(div*c);
				}
				System.out.println(req);
			}
		}
 
	}
 
}
