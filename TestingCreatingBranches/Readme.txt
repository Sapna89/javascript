I am just trying to test some git cmds
I created a branch in git

Naveen@NEO MINGW64 ~/Desktop/GitPractice (Master)
$ git checkout -b storynumber-11894
Switched to a new branch 'storynumber-11894'

Naveen@NEO MINGW64 ~/Desktop/GitPractice (storynumber-11894)

Now i have added this txt file. now I will commit it in the new branch without mearging it to the master branch.
===========================================================================================================================


Naveen@NEO MINGW64 ~
$ git clone https://github.com/Sapna89/javascript.git C:\Users\Naveen\Desktop\GitPractice
Cloning into 'C:UsersNaveenDesktopGitPractice'...
fatal: Invalid path 'C:/UsersNaveenDesktopGitPractice': No such file or directory

Naveen@NEO MINGW64 ~
$ git clone https://github.com/Sapna89/javascript.git C:/Users/Naveen/Desktop/GitPractice
Cloning into 'C:/Users/Naveen/Desktop/GitPractice'...
remote: Enumerating objects: 47, done.
remote: Counting objects: 100% (47/47), done.
remote: Compressing objects: 100% (43/43), done.
remote: Total 47 (delta 2), reused 29 (delta 1), pack-reused 0
Unpacking objects: 100% (47/47), done.
Checking out files: 100% (34/34), done.

Naveen@NEO MINGW64 ~
$ git status
fatal: Not a git repository (or any of the parent directories): .git

Naveen@NEO MINGW64 ~
$ cd C:\Users\Naveen\Desktop\GitPractice
bash: cd: C:UsersNaveenDesktopGitPractice: No such file or directory

Naveen@NEO MINGW64 ~
$ cd C:/Users/Naveen/Desktop/GitPractice

Naveen@NEO MINGW64 ~/Desktop/GitPractice (Master)
$ git checkout -b storynumber-11894
Switched to a new branch 'storynumber-11894'

Naveen@NEO MINGW64 ~/Desktop/GitPractice (storynumber-11894)
$ git status
On branch storynumber-11894
Untracked files:
  (use "git add <file>..." to include in what will be committed)

        TestingCreatingBranches/

nothing added to commit but untracked files present (use "git add" to track)

Naveen@NEO MINGW64 ~/Desktop/GitPractice (storynumber-11894)
$ git add TestingCreatingBranches/Readme.txt

Naveen@NEO MINGW64 ~/Desktop/GitPractice (storynumber-11894)
$ git commit -m "testing to create a new git branch and push the changes to that branch itself"

*** Please tell me who you are.

Run

  git config --global user.email "you@example.com"
  git config --global user.name "Your Name"

to set your account's default identity.
Omit --global to set the identity only in this repository.

fatal: unable to auto-detect email address (got 'Naveen@NEO.(none)')

Naveen@NEO MINGW64 ~/Desktop/GitPractice (storynumber-11894)
$ ^C

Naveen@NEO MINGW64 ~/Desktop/GitPractice (storynumber-11894)
$ git config --global user.name "sapna89"

Naveen@NEO MINGW64 ~/Desktop/GitPractice (storynumber-11894)
$ git commit -m "testing to create a new git branch and push the changes to that branch itself"

*** Please tell me who you are.

Run

  git config --global user.email "you@example.com"
  git config --global user.name "Your Name"

to set your account's default identity.
Omit --global to set the identity only in this repository.

fatal: unable to auto-detect email address (got 'Naveen@NEO.(none)')

Naveen@NEO MINGW64 ~/Desktop/GitPractice (storynumber-11894)
$ git config --global user.email "sapnanaveen8981@gmail.com"

Naveen@NEO MINGW64 ~/Desktop/GitPractice (storynumber-11894)
$ git commit -m "testing to create a new git branch and push the changes to that branch itself"
[storynumber-11894 8c40ebf] testing to create a new git branch and push the changes to that branch itself
 1 file changed, 10 insertions(+)
 create mode 100644 TestingCreatingBranches/Readme.txt

Naveen@NEO MINGW64 ~/Desktop/GitPractice (storynumber-11894)
$ git push -u origin storynumber-11894
fatal: HttpRequestException encountered.
   An error occurred while sending the request.
Username for 'https://github.com': Sapna89
Counting objects: 4, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (3/3), done.
Writing objects: 100% (4/4), 593 bytes | 0 bytes/s, done.
Total 4 (delta 1), reused 0 (delta 0)
remote: Resolving deltas: 100% (1/1), completed with 1 local object.
remote:
remote: Create a pull request for 'storynumber-11894' on GitHub by visiting:
remote:      https://github.com/Sapna89/javascript/pull/new/storynumber-11894
remote:
To https://github.com/Sapna89/javascript.git
 * [new branch]      storynumber-11894 -> storynumber-11894
Branch storynumber-11894 set up to track remote branch storynumber-11894 from origin.

Naveen@NEO MINGW64 ~/Desktop/GitPractice (storynumber-11894)
$
